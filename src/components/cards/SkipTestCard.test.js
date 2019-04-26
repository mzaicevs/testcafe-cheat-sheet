import React from "react";
import { shallow } from "enzyme";
import SkipTestCard from "./SkipTestCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("SkipTestCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<SkipTestCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
