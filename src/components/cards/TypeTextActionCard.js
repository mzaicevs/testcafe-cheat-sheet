import React from "react";
import { actions_typeText } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";
import CardLink from "../../base_components/CardLink";

const TypeTextActionCard = () => (
  <CodeCard
    cardTitle={
      <CardLink
        text={actions_typeText.title}
        href={actions_typeText.fullDocLink}
      />
    }
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
