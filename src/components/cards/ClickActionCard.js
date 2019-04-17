import React from "react";
import { actions_click } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const ClickActionCard = () => (
  <CodeCard
    cardTitle={actions_click.title}
    codeSnippet={{
      code: actions_click.code,
      language: actions_click.language,
      options: actions_click.options,
      example: actions_click.example
    }}
    description={actions_click.description}
  />
);

export default ClickActionCard;
