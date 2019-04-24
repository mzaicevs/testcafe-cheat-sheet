import React from "react";
import { shallow } from "enzyme";
import TypeTextActionCard from "./TypeTextActionCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("ClickActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<TypeTextActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
