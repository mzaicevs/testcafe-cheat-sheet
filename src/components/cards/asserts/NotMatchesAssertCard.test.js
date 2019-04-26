import React from "react";
import { shallow } from "enzyme";
import NotMatchesAssertCard from "./NotMatchesAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("NotMatchesAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<NotMatchesAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
