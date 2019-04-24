import React from "react";
import { fixture } from "../../snippets";
import MultiCodeCard from "../../base_components/MultiCodeCard";

const FixtureCard = () => (
  <MultiCodeCard
    cardTitle={fixture.title}
    fullDocLink={fixture.fullDocLink}
    codeSections={fixture.codeSections}
  />
);

export default FixtureCard;
