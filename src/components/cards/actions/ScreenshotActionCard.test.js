import React from "react";
import { shallow } from "enzyme";
import ScreenshotActionCard from "./ScreenshotActionCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("ScreenshotActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<ScreenshotActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
