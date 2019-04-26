import React from "react";
import { shallow } from "enzyme";
import NotOkAssertCard from "./NotOkAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("NotOkAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<NotOkAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
