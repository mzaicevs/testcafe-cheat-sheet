import React from "react";
import { actions_pressKey } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const PressKeyActionCard = () => (
  <CodeCard
    cardTitle={actions_pressKey.title}
    fullDocLink={actions_pressKey.fullDocLink}
    codeSnippet={{
      code: actions_pressKey.code,
      language: actions_pressKey.language,
      options: actions_pressKey.options,
      example: actions_pressKey.example
    }}
    description={actions_pressKey.description}
  />
);

export default PressKeyActionCard;
