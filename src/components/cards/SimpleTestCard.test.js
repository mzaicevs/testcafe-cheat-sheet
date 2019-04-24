import React from "react";
import { shallow } from "enzyme";
import SimpleTestCard from "./SimpleTestCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("SimpleTestCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<SimpleTestCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
