import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeHighlight = props => {
  const { children, language } = props;
  return (
    <SyntaxHighlighter
      language={language}
      // style={docco}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlight;
