import React from "react";
import { actions_typeText } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const TypeTextActionCard = () => (
  <CodeCard
    cardTitle={actions_typeText.title}
    fullDocLink={actions_typeText.fullDocLink}
    codeSnippet={{
      code: actions_typeText.code,
      language: actions_typeText.language,
      options: actions_typeText.options,
      example: actions_typeText.example
    }}
    description={actions_typeText.description}
  />
);

export default TypeTextActionCard;
