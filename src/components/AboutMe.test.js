import React from "react";
import { mount } from "enzyme";
import AboutMe from "./AboutMe";

describe("AboutMe", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<AboutMe />);
    expect(wrapper).toMatchSnapshot();
  });
});
