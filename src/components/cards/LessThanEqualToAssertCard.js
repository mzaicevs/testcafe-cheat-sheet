import React from "react";
import { assert_lessThanEqualTo } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const LessThanEqualToAssertCard = () => (
  <CodeCard
    cardTitle={assert_lessThanEqualTo.title}
    fullDocLink={assert_lessThanEqualTo.fullDocLink}
    codeSnippet={{
      code: assert_lessThanEqualTo.code,
      language: assert_lessThanEqualTo.language,
      options: assert_lessThanEqualTo.options,
      example: assert_lessThanEqualTo.example
    }}
    description={assert_lessThanEqualTo.description}
  />
);

export default LessThanEqualToAssertCard;
