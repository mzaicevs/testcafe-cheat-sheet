import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSyntaxHighlighter = props => {
  const { children, language } = props;
  return (
    <SyntaxHighlighter language={language} style={vs2015}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeSyntaxHighlighter;
