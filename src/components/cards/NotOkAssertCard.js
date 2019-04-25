import React from "react";
import { assert_notOk } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const NotOkAssertCard = () => (
  <CodeCard
    cardTitle={assert_notOk.title}
    fullDocLink={assert_notOk.fullDocLink}
    codeSnippet={{
      code: assert_notOk.code,
      language: assert_notOk.language,
      options: assert_notOk.options,
      example: assert_notOk.example
    }}
    description={assert_notOk.description}
  />
);

export default NotOkAssertCard;
