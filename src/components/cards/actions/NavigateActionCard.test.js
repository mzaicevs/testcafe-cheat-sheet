import React from "react";
import { shallow } from "enzyme";
import NavigateActionCard from "./NavigateActionCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("NavigateActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<NavigateActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
