import MonacoEditor from 'react-monaco-editor';
import { useState } from 'react';
(self as any).MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'json') {
      return './json.worker.bundle.js';
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return './css.worker.bundle.js';
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return './html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.bundle.js';
    }
    return './editor.worker.bundle.js';
  }
};

const Editor = () => {
  const [code, setCode] = useState('code');
  function editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  function onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true
  };

  return (
    <MonacoEditor
      language="cpp"
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
      width="45%"
    />
  );
};

export default Editor;
