import React from "react";
import { shallow } from "enzyme";

import HeroesSearchScreen from "./HeroesSearchScreen";

describe("HeroesSearchScreen Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<HeroesSearchScreen />);
  });

  it("Should render the component", () => {
    expect(component).toHaveLength(1);
  });
});
