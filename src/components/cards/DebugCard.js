import React from "react";
import { debug } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const DebugCard = () => (
  <CodeCard
    cardTitle={debug.title}
    fullDocLink={debug.fullDocLink}
    codeSnippet={{
      code: debug.code,
      language: debug.language,
      example: debug.example
    }}
    description={debug.description}
  />
);

export default DebugCard;
