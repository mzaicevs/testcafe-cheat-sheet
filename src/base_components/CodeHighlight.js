import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CodeSyntaxHighlighter from "./CodeSyntaxHighlighter";

const CodeHighlight = ({ children, language }) => (
  <>
    {document.queryCommandSupported("copy") ? (
      <CopyToClipboard text={children} onCopy={() => {}}>
        <div style={{ cursor: "copy" }}>
          <CodeSyntaxHighlighter language={language}>
            {children}
          </CodeSyntaxHighlighter>
        </div>
      </CopyToClipboard>
    ) : (
      <CodeSyntaxHighlighter language={language}>
        {children}
      </CodeSyntaxHighlighter>
    )}
  </>
);

const MultiCodeHighlight = ({ code, language }) => (
  <>
    {code.map(codeItem => (
      <CodeHighlight
        key={`${language}-${codeItem.substring(0, 24)}`}
        language={language}
      >
        {codeItem}
      </CodeHighlight>
    ))}
  </>
);

export { MultiCodeHighlight, CodeHighlight };
