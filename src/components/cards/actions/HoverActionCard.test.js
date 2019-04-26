import React from "react";
import { shallow } from "enzyme";
import HoverActionCard from "./HoverActionCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("ClickActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<HoverActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
