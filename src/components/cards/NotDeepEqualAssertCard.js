import React from "react";
import { assert_notDeepEqual } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const NotDeepEqualAssertCard = () => (
  <CodeCard
    cardTitle={assert_notDeepEqual.title}
    fullDocLink={assert_notDeepEqual.fullDocLink}
    codeSnippet={{
      code: assert_notDeepEqual.code,
      language: assert_notDeepEqual.language,
      options: assert_notDeepEqual.options,
      example: assert_notDeepEqual.example
    }}
    description={assert_notDeepEqual.description}
  />
);

export default NotDeepEqualAssertCard;
