import React from "react";
import { assert_notMatch } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const NotMatchesAssertCard = () => (
  <CodeCard
    cardTitle={assert_notMatch.title}
    fullDocLink={assert_notMatch.fullDocLink}
    codeSnippet={{
      code: assert_notMatch.code,
      language: assert_notMatch.language,
      options: assert_notMatch.options,
      example: assert_notMatch.example
    }}
    description={assert_notMatch.description}
  />
);

export default NotMatchesAssertCard;
