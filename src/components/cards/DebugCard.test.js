import React from "react";
import { shallow } from "enzyme";
import DebugCard from "./DebugCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("DebugCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<DebugCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
