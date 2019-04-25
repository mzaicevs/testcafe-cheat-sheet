import React from "react";
import { assert_notWithin } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const NotWithinAssertCard = () => (
  <CodeCard
    cardTitle={assert_notWithin.title}
    fullDocLink={assert_notWithin.fullDocLink}
    codeSnippet={{
      code: assert_notWithin.code,
      language: assert_notWithin.language,
      options: assert_notWithin.options,
      example: assert_notWithin.example
    }}
    description={assert_notWithin.description}
  />
);

export default NotWithinAssertCard;
