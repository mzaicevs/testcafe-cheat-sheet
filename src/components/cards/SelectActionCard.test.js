import React from "react";
import { shallow } from "enzyme";
import SelectActionCard from "./SelectActionCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("FixtureCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<SelectActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
