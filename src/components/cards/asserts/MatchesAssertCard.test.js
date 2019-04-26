import React from "react";
import { shallow } from "enzyme";
import MatchesAssertCard from "./MatchesAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("MatchesAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<MatchesAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
