import React from "react";
import { shallow } from "enzyme";
import SimpleTestCard from "./SimpleTestCard";

describe("SimpleTestCard", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<SimpleTestCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
