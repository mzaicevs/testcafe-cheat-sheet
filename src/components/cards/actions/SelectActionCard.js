import React from "react";
import { actions_select } from "../../../snippets";
import MultiCodeCard from "../../../base_components/MultiCodeCard";

const SelectActionCard = () => (
  <MultiCodeCard
    cardTitle={actions_select.title}
    fullDocLink={actions_select.fullDocLink}
    codeSections={actions_select.codeSections}
  />
);

export default SelectActionCard;
