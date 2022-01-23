import React, { useRef, useState, useCallback } from "react";
import ReactDOM from "react-dom";

import Toolbar from "@organisms/Toolbar";
import CodeEditor from "@organisms/CodeEditor";
import StatusLogArea from "@organisms/StatusLogArea";
import { defaultOption } from '@models/LanguageModel';
import { useExecuteScript } from '@hooks/useExecuteScript';

const App = () => {
  const [ languageOption, setLanguageOption] = useState(defaultOption);
  const { statusLog, executeScript } = useExecuteScript();

  const onChangeDefaultLanguage = useCallback(option => {
    setLanguageOption(option)
  });

  const editorRef = useRef(null);
  const handleEditorDidMount = (editor, monaco)  => {
    editorRef.current = editor;
  };

  const onClickRun = useCallback(e => {
    executeScript(languageOption.value, editorRef.current.getValue());
  });

  return (
    <React.Fragment>
      <Toolbar
        languageOption={languageOption}
        onChangeDefaultLanguage={onChangeDefaultLanguage}
        onClickRun={onClickRun}
      />
      <CodeEditor
        language={languageOption.value}
        onMount={handleEditorDidMount}
      />
      <StatusLogArea value={statusLog} />
    </React.Fragment>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
