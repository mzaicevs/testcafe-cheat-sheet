import React from "react";
import { shallow } from "enzyme";
import LessThanEqualToAssertCard from "./LessThanEqualToAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("LessThanEqualToAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<LessThanEqualToAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
