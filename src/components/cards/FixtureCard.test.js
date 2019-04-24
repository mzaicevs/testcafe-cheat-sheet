import React from "react";
import { shallow } from "enzyme";
import FixtureCard from "./FixtureCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("FixtureCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<FixtureCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
