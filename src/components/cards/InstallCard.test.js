import React from "react";
import { shallow } from "enzyme";
import InstallCard from "./InstallCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("InstallCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<InstallCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
