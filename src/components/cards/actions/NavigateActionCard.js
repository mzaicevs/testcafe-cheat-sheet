import React from "react";
import { actions_navigate } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const NavigateActionCard = () => (
  <CodeCard
    cardTitle={actions_navigate.title}
    fullDocLink={actions_navigate.fullDocLink}
    codeSnippet={{
      code: actions_navigate.code,
      language: actions_navigate.language,
      example: actions_navigate.example
    }}
    description={actions_navigate.description}
  />
);

export default NavigateActionCard;
