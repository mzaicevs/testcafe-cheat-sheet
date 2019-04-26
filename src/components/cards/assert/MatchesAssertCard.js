import React from "react";
import { assert_match } from "../../../snippets";
import CodeCard from "../../../base_components/CodeCard";

const MatchesAssertCard = () => (
  <CodeCard
    cardTitle={assert_match.title}
    fullDocLink={assert_match.fullDocLink}
    codeSnippet={{
      code: assert_match.code,
      language: assert_match.language,
      options: assert_match.options,
      example: assert_match.example
    }}
    description={assert_match.description}
  />
);

export default MatchesAssertCard;
