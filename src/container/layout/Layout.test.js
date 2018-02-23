import React from "react";
import { Text, StatusBar } from "react-native";
import Layout from "./Layout";
import { shallow } from "enzyme";

describe("Render Layout", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it("render layout status correctly", () => {
    let statusBar = wrapper.find(StatusBar);
    expect(statusBar).toHaveLength(1);
  });
});
