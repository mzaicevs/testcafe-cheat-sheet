import React from "react";
import { assert_within } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const WithinAssertCard = () => (
  <CodeCard
    cardTitle={assert_within.title}
    fullDocLink={assert_within.fullDocLink}
    codeSnippet={{
      code: assert_within.code,
      language: assert_within.language,
      options: assert_within.options,
      example: assert_within.example
    }}
    description={assert_within.description}
  />
);

export default WithinAssertCard;
