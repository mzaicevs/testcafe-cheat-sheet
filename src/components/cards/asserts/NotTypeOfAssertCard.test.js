import React from "react";
import { shallow } from "enzyme";
import NotTypeOfAssertCard from "./NotTypeOfAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("NotTypeOfAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<NotTypeOfAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
