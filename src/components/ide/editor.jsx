import AceEditor from 'react-ace';
import './editor_setup';

const Editor = ({ def_set, onCodeChange, code, typing }) => {
  return (
    <div className="code-area">
      <div className="editor-head">
        <h6>
          <strong>Editor</strong>
        </h6>
      </div>
      <AceEditor
        placeholder={'Enter your code here'}
        tabSize={def_set.tsize}
        fontSize={def_set.fsize}
        focus={true}
        wrapEnabled={true}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        width="100%"
        height="70vh"
        value={code}
        onChange={onCodeChange}
        mode={def_set.lang.code}
        theme={def_set.theme.code}
        editorProps={{ $blockScrolling: true }}
      />
      <div className="typing-name-area">
        <h6>
          <strong>{typing ? `${typing.toUpperCase()} is coding` : ''}</strong>
        </h6>
      </div>
    </div>
  );
};

export default Editor;
