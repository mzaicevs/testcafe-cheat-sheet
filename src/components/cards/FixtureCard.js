import React from "react";
import { fixture } from "../../snippets";
import MultiCodeCard from "../../base_components/MultiCodeCard";
import CardLink from "../../base_components/CardLink";

const FixtureCard = () => (
  <MultiCodeCard
    cardTitle={<CardLink text={fixture.title} href={fixture.fullDocLink} />}
    codeSections={fixture.codeSections}
  />
);

export default FixtureCard;
