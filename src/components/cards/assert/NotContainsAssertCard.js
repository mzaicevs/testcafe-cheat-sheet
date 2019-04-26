import React from "react";
import { assert_notContains } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const NotContainsAssertCard = () => (
  <CodeCard
    cardTitle={assert_notContains.title}
    fullDocLink={assert_notContains.fullDocLink}
    codeSnippet={{
      code: assert_notContains.code,
      language: assert_notContains.language,
      options: assert_notContains.options,
      example: assert_notContains.example
    }}
    description={assert_notContains.description}
  />
);

export default NotContainsAssertCard;
