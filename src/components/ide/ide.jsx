import { useState, useEffect } from 'react';
import Editor from './editor';
import IO from './io';
import Setting from '../setting_editor/settings';
import queryString from 'query-string';
import io from 'socket.io-client';
import { initialSetting } from './../setting_editor/settings_utils';
import { socketEndpoint } from '../../serverEndpoints';
import socketHandler from './../../socket';
import {
  handleChangeSettingHelper,
  handleCodeInputHelper,
  handleInputHelper,
  compileCodeHelper,
} from './../../helperFunctions';
import './ide.css';

const socket = io(socketEndpoint);

const IDE = ({ location }) => {
  const [setting, setSetting] = useState(initialSetting);
  const [code, setCode] = useState('');
  const [stdin, setStdin] = useState('');
  const [stdop, setStdop] = useState('');
  const [room, setRoom] = useState('');
  useEffect(() => {
    const query = queryString.parse(location.search);
    setRoom(query.id);
    socket.on(
      'connect',
      socketHandler(
        socket,
        setCode,
        setStdin,
        setStdop,
        setSetting,
        setting,
        query
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);
  const handleChangeSetting = handleChangeSettingHelper(
    socket,
    room,
    setting,
    setSetting
  );
  const handleCodeInput = handleCodeInputHelper(socket, room, setCode);
  const handleInput = handleInputHelper(socket, room, setStdin);
  const compileCode = compileCodeHelper(
    socket,
    room,
    code,
    setting,
    stdin,
    setStdop
  );
  return (
    <div id="ide">
      <Setting
        def_set={setting}
        onChangeSetting={handleChangeSetting}
      ></Setting>
      <div className="editor">
        <Editor def_set={setting} onCodeChange={handleCodeInput} code={code} />
        <div className="run-btn-holder">
          <button className="run-btn" onClick={compileCode}>
            Run
          </button>
        </div>
        <div className="io">
          <IO
            inp={stdin}
            type="input"
            onInputChange={handleInput}
            fontSize={setting.fsize}
          />
          <IO type="output" out={stdop} fontSize={setting.fsize} />
        </div>
      </div>
    </div>
  );
};

export default IDE;
