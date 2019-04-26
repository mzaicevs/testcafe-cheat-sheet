import React from "react";
import { assert_contains } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const ContainsAssertCard = () => (
  <CodeCard
    cardTitle={assert_contains.title}
    fullDocLink={assert_contains.fullDocLink}
    codeSnippet={{
      code: assert_contains.code,
      language: assert_contains.language,
      options: assert_contains.options,
      example: assert_contains.example
    }}
    description={assert_contains.description}
  />
);

export default ContainsAssertCard;
