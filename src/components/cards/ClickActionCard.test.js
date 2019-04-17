import React from "react";
import { shallow } from "enzyme";
import ClickActionCard from "./ClickActionCard";

describe("ClickActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<ClickActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
