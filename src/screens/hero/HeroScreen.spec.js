import React from "react";
import { shallow } from "enzyme";

import HeroScreen from "./HeroScreen";

describe("HeroScreen Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<HeroScreen />);
  });

  it("Should render the component", () => {
    expect(component).toHaveLength(1);
  });
});
