import React from "react";
import { shallow } from "enzyme";
import TypeOfAssertCard from "./TypeOfAssertCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("TypeOfAssertCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<TypeOfAssertCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
