import React from "react";
import { shallow } from "enzyme";
import WithinAssertCard from "./WithinAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("WithinAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<WithinAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
