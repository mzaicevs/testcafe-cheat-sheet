import React from "react";
import { assert_greaterThanEqualTo } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const GreaterThanEqualToAssertCard = () => (
  <CodeCard
    cardTitle={assert_greaterThanEqualTo.title}
    fullDocLink={assert_greaterThanEqualTo.fullDocLink}
    codeSnippet={{
      code: assert_greaterThanEqualTo.code,
      language: assert_greaterThanEqualTo.language,
      options: assert_greaterThanEqualTo.options,
      example: assert_greaterThanEqualTo.example
    }}
    description={assert_greaterThanEqualTo.description}
  />
);

export default GreaterThanEqualToAssertCard;
