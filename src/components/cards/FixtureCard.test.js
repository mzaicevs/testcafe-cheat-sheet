import React from "react";
import { shallow } from "enzyme";
import FixtureCard from "./FixtureCard";

describe("FixtureCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<FixtureCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
