import React from "react";
import { shallow } from "enzyme";
import LessThanAssertCard from "./LessThanAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("LessThanAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<LessThanAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
