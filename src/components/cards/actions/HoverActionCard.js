import React from "react";
import { actions_hover } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const HoverActionCard = () => (
  <CodeCard
    cardTitle={actions_hover.title}
    fullDocLink={actions_hover.fullDocLink}
    codeSnippet={{
      code: actions_hover.code,
      language: actions_hover.language,
      options: actions_hover.options,
      example: actions_hover.example
    }}
    description={actions_hover.description}
  />
);

export default HoverActionCard;
