import React from "react";
import { assert_ok } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const OkAssertCard = () => (
  <CodeCard
    cardTitle={assert_ok.title}
    fullDocLink={assert_ok.fullDocLink}
    codeSnippet={{
      code: assert_ok.code,
      language: assert_ok.language,
      options: assert_ok.options,
      example: assert_ok.example
    }}
    description={assert_ok.description}
  />
);

export default OkAssertCard;
