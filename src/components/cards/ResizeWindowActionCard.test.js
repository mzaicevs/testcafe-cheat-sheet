import React from "react";
import { shallow } from "enzyme";
import ResizeWindowActionCard from "./ResizeWindowActionCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("ResizeWindowActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<ResizeWindowActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
