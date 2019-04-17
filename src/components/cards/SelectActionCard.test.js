import React from "react";
import { shallow } from "enzyme";
import SelectActionCard from "./SelectActionCard";

describe("FixtureCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<SelectActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
