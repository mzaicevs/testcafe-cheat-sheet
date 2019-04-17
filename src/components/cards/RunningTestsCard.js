import React from "react";
import { runningTest } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const RunningTestsCard = () => (
  <CodeCard
    cardTitle={runningTest.title}
    codeSnippet={{
      code: runningTest.code,
      language: runningTest.language
    }}
  />
);

export default RunningTestsCard;
