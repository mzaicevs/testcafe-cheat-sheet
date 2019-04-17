import React from "react";
import { shallow } from "enzyme";
import RunningTestsCard from "./RunningTestsCard";

describe("InstallCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<RunningTestsCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
