import React from "react";
import { install } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const InstallCard = () => (
  <CodeCard
    cardTitle={install.title}
    codeSnippet={{
      code: install.code,
      language: install.language
    }}
  />
);

export default InstallCard;
