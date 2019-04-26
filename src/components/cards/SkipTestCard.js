import React from "react";
import { skippingTests } from "../../snippets";
import MultiCodeCard from "../../base_components/MultiCodeCard";

const SkipTestCard = () => (
  <MultiCodeCard
    cardTitle={skippingTests.title}
    fullDocLink={skippingTests.fullDocLink}
    codeSections={skippingTests.codeSections}
  />
);

export default SkipTestCard;
