import React from "react";
import { shallow } from "enzyme";
import RunningTestsCard from "./RunningTestsCard";

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => () => {});

describe("InstallCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<RunningTestsCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
