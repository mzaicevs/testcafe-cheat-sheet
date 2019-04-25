import React from "react";
import { shallow } from "enzyme";
import ContainsAssertCard from "./ContainsAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("ContainsAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<ContainsAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
