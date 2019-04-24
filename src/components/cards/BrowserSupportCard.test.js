import React from "react";
import { shallow } from "enzyme";
import BrowserSupportCard from "./BrowserSupportCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("BrowserSupportCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<BrowserSupportCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
