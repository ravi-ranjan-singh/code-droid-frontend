import axios from 'axios';
import swal from 'sweetalert';
import { apiEndpoint } from './serverEndpoints';
export const handleChangeSettingHelper = (
  socket,
  room,
  setting,
  setSetting
) => (value, property) => {
  if (property === 'lang') {
    socket.emit('lang-change', { value, room });
  }
  let newSetting = { ...setting };
  newSetting[property] = value;
  setSetting(newSetting);
};

export const handleCodeInputHelper = (socket, room, setCode) => (e) => {
  socket.emit('new-code', { code: e, room });
  socket.emit('typing', { name: localStorage.getItem('userName'), room });
  setCode(e);
};

export const handleInputHelper = (socket, room, setStdin) => (e) => {
  socket.emit('stdin', { inputs: e.target.value, room });
  setStdin(e.target.value);
};

export const compileCodeHelper = (
  socket,
  room,
  code,
  setting,
  stdin,
  setStdop,
  btnRef
) => async () => {
  const data = {
    script: code,
    language: setting.lang.serverName,
    versionIndex: setting.lang.versions[setting.lang.versions.length - 1].vi,
    stdin,
  };
  try {
    btnRef.current.disabled = true;
    const { data: res } = await axios.post(`${apiEndpoint}/compile`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    btnRef.current.disabled = false;
    socket.emit('stdout', { output: res.data.output, room });
    setStdop(res.data.output);
  } catch (error) {
    if (error.response) {
      let msg = error.response.data.message;
      swal({
        title: msg,
        icon: 'warning',
      });
    } else {
      swal({
        title: 'Something went wrong.Please try again',
        icon: 'warning',
      });
    }
  }
};

export const sendDataToServer = async (data, ep, state) => {
  try {
    const { data: res } = await axios.post(`${apiEndpoint}/users/${ep}`, data);
    localStorage.setItem('jwt', res.token);
    localStorage.setItem('userName', res.data.user.name);
    if (state) window.location = state.location.pathname;
    else window.location = '/dashboard';
  } catch (error) {
    if (error.response) {
      let msg = error.response.data.message.split('. ')[0];
      if (msg.startsWith('Dublicate field value:'))
        msg = 'Already Exist' + msg.split('Dublicate field value:')[1];
      swal({
        title: msg,
        icon: 'warning',
      });
    } else {
      swal({
        title: 'Something went wrong.Please try again',
        icon: 'warning',
      });
    }
  }
};

export const validateEmptyField = (data) => {
  const objKeys = Object.keys(data);
  for (let i = 0; i < objKeys.length; i++) {
    const property = objKeys[i];
    if (data[property] === '') {
      swal({
        title: `${property.toUpperCase()} can't be empty field`,
        icon: 'warning',
      });
      return false;
    }
  }
  return true;
};

export const copyHandler = (tooltipRef) => {
  document.querySelector('#copy-area').select();
  document.execCommand('copy');
  tooltipRef.current.dataset.tooltip = 'Copied';
  setTimeout(() => {
    tooltipRef.current.dataset.tooltip = 'Copy IDE Joining Link';
  }, 1000);
};
