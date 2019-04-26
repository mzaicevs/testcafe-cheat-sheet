import React from "react";
import { shallow } from "enzyme";
import GreaterThanEqualToAssertCard from "./GreaterThanEqualToAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("GreaterThanEqualToAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<GreaterThanEqualToAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
