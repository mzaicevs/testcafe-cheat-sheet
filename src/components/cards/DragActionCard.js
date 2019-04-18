import React from "react";
import { actions_drag } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";
import CardLink from "../../base_components/CardLink";

const DragActionCard = () => (
  <CodeCard
    cardTitle={
      <CardLink text={actions_drag.title} href={actions_drag.fullDocLink} />
    }
    codeSnippet={{
      code: actions_drag.code,
      language: actions_drag.language,
      options: actions_drag.options,
      example: actions_drag.example
    }}
    description={actions_drag.description}
  />
);

export default DragActionCard;
