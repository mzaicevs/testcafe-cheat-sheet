import React from "react";
import { shallow } from "enzyme";
import TypeTextActionCard from "./TypeTextActionCard";

describe("ClickActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<TypeTextActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
