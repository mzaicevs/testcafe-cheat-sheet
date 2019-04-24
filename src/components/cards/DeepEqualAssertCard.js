import React from "react";
import { assert_deepEqual } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const DeepEqualAssertCard = () => (
  <CodeCard
    cardTitle={assert_deepEqual.title}
    fullDocLink={assert_deepEqual.fullDocLink}
    codeSnippet={{
      code: assert_deepEqual.code,
      language: assert_deepEqual.language,
      options: assert_deepEqual.options,
      example: assert_deepEqual.example
    }}
    description={assert_deepEqual.description}
  />
);

export default DeepEqualAssertCard;
