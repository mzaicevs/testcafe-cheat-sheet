import React from "react";
import { actions_click } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";
import CardLink from "../../base_components/CardLink";

const ClickActionCard = () => (
  <CodeCard
    cardTitle={
      <CardLink text={actions_click.title} href={actions_click.fullDocLink} />
    }
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
