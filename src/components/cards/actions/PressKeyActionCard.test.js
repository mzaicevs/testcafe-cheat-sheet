import React from "react";
import { shallow } from "enzyme";
import PressKeyActionCard from "./PressKeyActionCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("PressKeyActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<PressKeyActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
