import { useState, useEffect, createRef } from 'react';
import Editor from './editor';
import IO from './io';
import Setting from '../setting_editor/settings';
import queryString from 'query-string';
import M from 'materialize-css';
import io from 'socket.io-client';
import { initialSetting } from './../setting_editor/settings_utils';
import { socketEndpoint } from '../../serverEndpoints';
import socketHandler from './../../socket';
import {
  handleChangeSettingHelper,
  handleCodeInputHelper,
  handleInputHelper,
  compileCodeHelper,
  copyHandler,
} from './../../helperFunctions';
import './ide.css';
import { Redirect } from 'react-router-dom';

const btnRef = createRef();
const tooltipRef = createRef();
const socket = io(socketEndpoint);

const IDE = ({ location }) => {
  const [setting, setSetting] = useState(initialSetting);
  const [code, setCode] = useState('');
  const [stdin, setStdin] = useState('');
  const [stdop, setStdop] = useState('');
  const [room, setRoom] = useState('');
  const [typing, setTyping] = useState();
  useEffect(() => {
    M.Tooltip.init(tooltipRef.current);
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
        query,
        setTyping
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  if (!queryString.parse(location.search).id) {
    return <Redirect to="/dashboard" />;
  }
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
    setStdop,
    btnRef
  );
  return (
    <div id="ide">
      <Setting
        def_set={setting}
        onChangeSetting={handleChangeSetting}
      ></Setting>
      <div className="editor">
        <Editor
          def_set={setting}
          onCodeChange={handleCodeInput}
          code={code}
          typing={typing}
        />
        <div className="run-btn-holder">
          <button className="run-btn" onClick={compileCode} ref={btnRef}>
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
      <div className="fixed-action-btn">
        <button
          className="btn-floating btn-large red tooltipped"
          data-position="top"
          data-tooltip="Copy IDE Joining Link"
          ref={tooltipRef}
          onClick={() => copyHandler(tooltipRef)}
        >
          <i className="fas fa-copy"></i>
        </button>
        <input
          type="text"
          value={window.location.href}
          style={{ opacity: 0 }}
          id="copy-area"
        />
      </div>
    </div>
  );
};

export default IDE;
