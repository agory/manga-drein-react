import React from "react";
import { Text } from "react-native";
import Manga from "./Manga";
import { shallow } from "enzyme";
import { MANGA } from "../../data/manga";

describe("render Manga", () => {
  let render;
  beforeEach(() => {
    render = shallow(<Manga manga={MANGA} />);
  });

  // first but not useful
  it("should render a title", () => {
    expect(render.contains(<Text>{MANGA.title}</Text>)).toBeTruthy();
  });

  it("should render a description", () => {
    expect(render.contains(<Text>{MANGA.description}</Text>)).toBeTruthy();
  });

  it("should render an author", () => {
    expect(
      render.contains(<Text>{MANGA.authors.join(" ")}</Text>)
    ).toBeTruthy();
  });

  it("should not render description in minimal mode", () => {
    render = shallow(<Manga manga={MANGA} minimal={true} />);
    expect(render.contains(<Text>{MANGA.description}</Text>)).toBeFalsy();
  });
});
