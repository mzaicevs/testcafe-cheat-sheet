import React from "react";
import { shallow } from "enzyme";
import OkAssertCard from "./OkAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("OkAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<OkAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
