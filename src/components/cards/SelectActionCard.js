import React from "react";
import { actions_select } from "../../snippets";
import MultiCodeCard from "../../base_components/MultiCodeCard";
import CardLink from "../../base_components/CardLink";

const SelectActionCard = () => (
  <MultiCodeCard
    cardTitle={
      <CardLink text={actions_select.title} href={actions_select.fullDocLink} />
    }
    codeSections={actions_select.codeSections}
  />
);

export default SelectActionCard;
