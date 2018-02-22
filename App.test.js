import React from "react";
import App from "./App";
import RootStack from "./src/RootStack";
import { shallow } from "enzyme";

describe("render App", () => {
  it("should render RootStack", () => {
    const wrapper = shallow(<App />);
    const rootStack = wrapper.find(RootStack);
    expect(rootStack).toHaveLength(1);
  });
});
