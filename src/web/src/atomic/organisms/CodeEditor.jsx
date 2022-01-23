import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({language, onMount}) => {
  return (
    <Editor
      height="70vh"
      language={language}
      onMount={onMount}
      theme="vs-dark"
    />
  );
};

export default CodeEditor;
