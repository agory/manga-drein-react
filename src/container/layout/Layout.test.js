import React from "react";
import { Text, ToolbarAndroid } from "react-native";
import Layout from "./Layout";
import { shallow } from "enzyme";

describe("Render Layout", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it("render layout toolbar correctly", () => {
    let toolbar = wrapper.find(ToolbarAndroid);
    expect(toolbar.prop("title")).toEqual("Manga Drein");
  });
});
