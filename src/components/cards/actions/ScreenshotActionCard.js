import React from "react";
import { actions_takeScreenshot } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const ScreenshotActionCard = () => (
  <CodeCard
    cardTitle={actions_takeScreenshot.title}
    fullDocLink={actions_takeScreenshot.fullDocLink}
    codeSnippet={{
      code: actions_takeScreenshot.code,
      language: actions_takeScreenshot.language,
      options: actions_takeScreenshot.options,
      example: actions_takeScreenshot.example
    }}
    description={actions_takeScreenshot.description}
  />
);

export default ScreenshotActionCard;
