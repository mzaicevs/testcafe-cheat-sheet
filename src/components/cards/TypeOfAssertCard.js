import React from "react";
import { assert_typeOf } from "../../snippets";
import CodeCard from "../../base_components/CodeCard";

const TypeOfAssertCard = () => (
  <CodeCard
    cardTitle={assert_typeOf.title}
    fullDocLink={assert_typeOf.fullDocLink}
    codeSnippet={{
      code: assert_typeOf.code,
      language: assert_typeOf.language,
      options: assert_typeOf.options,
      example: assert_typeOf.example
    }}
    description={assert_typeOf.description}
  />
);

export default TypeOfAssertCard;
