import React from "react";
import { shallow } from "enzyme";
import GreaterThanAssertCard from "./GreaterThanAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("GreaterThanAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<GreaterThanAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
