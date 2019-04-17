import React from "react";
import { shallow } from "enzyme";
import BrowserSupportCard from "./BrowserSupportCard";

describe("BrowserSupportCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<BrowserSupportCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
