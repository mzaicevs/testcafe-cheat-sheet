import React from "react";
import { shallow } from "enzyme";
import DragActionCard from "./DragActionCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("ClickActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<DragActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
