import React from "react";
import { Text } from "react-native";
import HomeScreen from "./HomeScreen";
import { shallow } from "enzyme";

describe("render Home", () => {
  let render;
  beforeEach(() => {
    render = shallow(<HomeScreen />);
  });

  // first but not useful
  it("should render a welcome message", () => {
    expect(
      render.contains(<Text>Welcome to Manga drein app with react native</Text>)
    ).toBeTruthy();
  });
});
