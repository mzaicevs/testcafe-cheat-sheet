import React from "react";
import { shallow } from "enzyme";
import CardContainer from "./CardContainer";

describe("CardContainer", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<CardContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
