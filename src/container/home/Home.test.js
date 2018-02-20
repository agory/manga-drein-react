import React from "react";
import { Text } from "react-native";
import Home from "./Home";
import { shallow } from "enzyme";

describe("render", () => {
  let render;
  beforeEach(() => {
    render = shallow(<Home />);
  });

  // first but not useful
  it("should render a welcome message", () => {
    expect(
      render.contains(<Text>Welcome to Manga drein app with react native</Text>)
    ).toBeTruthy();
  });
});
