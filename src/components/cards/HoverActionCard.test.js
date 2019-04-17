import React from "react";
import { shallow } from "enzyme";
import HoverActionCard from "./HoverActionCard";

describe("ClickActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<HoverActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
