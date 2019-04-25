import React from "react";
import { assert_lessThan } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const LessThanAssertCard = () => (
  <CodeCard
    cardTitle={assert_lessThan.title}
    fullDocLink={assert_lessThan.fullDocLink}
    codeSnippet={{
      code: assert_lessThan.code,
      language: assert_lessThan.language,
      options: assert_lessThan.options,
      example: assert_lessThan.example
    }}
    description={assert_lessThan.description}
  />
);

export default LessThanAssertCard;
