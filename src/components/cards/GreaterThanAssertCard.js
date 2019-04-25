import React from "react";
import { assert_greaterThan } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const GreaterThanAssertCard = () => (
  <CodeCard
    cardTitle={assert_greaterThan.title}
    fullDocLink={assert_greaterThan.fullDocLink}
    codeSnippet={{
      code: assert_greaterThan.code,
      language: assert_greaterThan.language,
      options: assert_greaterThan.options,
      example: assert_greaterThan.example
    }}
    description={assert_greaterThan.description}
  />
);

export default GreaterThanAssertCard;
