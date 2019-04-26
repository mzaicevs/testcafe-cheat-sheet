import React from "react";
import { actions_resizeWindow } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const ResizeWindowActionCard = () => (
  <CodeCard
    cardTitle={actions_resizeWindow.title}
    fullDocLink={actions_resizeWindow.fullDocLink}
    codeSnippet={{
      code: actions_resizeWindow.code,
      language: actions_resizeWindow.language,
      options: actions_resizeWindow.options,
      example: actions_resizeWindow.example
    }}
    description={actions_resizeWindow.description}
  />
);

export default ResizeWindowActionCard;
