import React from "react";
import { shallow } from "enzyme";
import ClickActionCard from "./ClickActionCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("ClickActionCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<ClickActionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
