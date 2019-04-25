import React from "react";
import { shallow } from "enzyme";
import NotContainsAssertCard from "./NotContainsAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("NotContainsAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<NotContainsAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
