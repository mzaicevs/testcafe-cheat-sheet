import React from "react";
import { shallow } from "enzyme";
import InstallCard from "./InstallCard";

describe("InstallCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<InstallCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
