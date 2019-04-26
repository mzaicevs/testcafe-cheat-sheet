import React from "react";
import { shallow } from "enzyme";
import NotWithinAssertCard from "./NotWithinAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("NotWithinAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<NotWithinAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
