import React from "react";
import { shallow } from "enzyme";

import HeroDetail from "./HeroDetail";

describe("HeroDetail Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<HeroDetail />);
  });

  it("Should render the component", () => {
    expect(component).toHaveLength(1);
  });
});
