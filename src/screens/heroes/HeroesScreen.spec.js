import React from "react";
import { shallow } from "enzyme";

import HeroesScreen from "./HeroesScreen";

describe("HeroesScreen Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<HeroesScreen />);
  });

  it("Should render the component", () => {
    expect(component).toHaveLength(1);
  });
});
