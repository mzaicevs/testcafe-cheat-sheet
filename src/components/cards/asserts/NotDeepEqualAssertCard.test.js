import React from "react";
import { shallow } from "enzyme";
import NotDeepEqualAssertCard from "./NotDeepEqualAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("NotDeepEqualAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<NotDeepEqualAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
