import React from "react";
import { shallow } from "enzyme";
import DragActionCard from "./DragActionCard";

describe("ClickActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<DragActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
