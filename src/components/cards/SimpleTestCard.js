import React from "react";
import { simpleTest } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const SimpleTestCard = () => (
  <CodeCard
    cardTitle={simpleTest.title}
    codeSnippet={{
      code: simpleTest.code,
      language: simpleTest.language
    }}
  />
);

export default SimpleTestCard;
