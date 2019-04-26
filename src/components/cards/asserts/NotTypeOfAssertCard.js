import React from "react";
import { assert_notTypeOf } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const NotTypeOfAssertCard = () => (
  <CodeCard
    cardTitle={assert_notTypeOf.title}
    fullDocLink={assert_notTypeOf.fullDocLink}
    codeSnippet={{
      code: assert_notTypeOf.code,
      language: assert_notTypeOf.language,
      options: assert_notTypeOf.options,
      example: assert_notTypeOf.example
    }}
    description={assert_notTypeOf.description}
  />
);

export default NotTypeOfAssertCard;
