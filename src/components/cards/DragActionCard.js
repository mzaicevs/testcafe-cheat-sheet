import React from "react";
import { actions_drag } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const DragActionCard = () => (
  <CodeCard
    cardTitle={actions_drag.title}
    fullDocLink={actions_drag.fullDocLink}
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
