import React from "react";
import { shallow } from "enzyme";
import DeepEqualAssertCard from "./DeepEqualAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("DeepEqualAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<DeepEqualAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
