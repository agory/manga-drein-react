import React from "react";
import { Text } from "react-native";
import Manga from "./Manga";
import { shallow } from "enzyme";
import { manga } from "../../data/manga";

describe("render Manga", () => {
  let render;
  beforeEach(() => {
    render = shallow(<Manga manga={manga} />);
  });

  // first but not useful
  it("should render a title", () => {
    expect(render.contains(<Text>{manga.title}</Text>)).toBeTruthy();
  });

  it("should render a description", () => {
    expect(render.contains(<Text>{manga.description}</Text>)).toBeTruthy();
  });

  it("should render an author", () => {
    expect(
      render.contains(<Text>{manga.authors.join(" ")}</Text>)
    ).toBeTruthy();
  });

  it("should not render description in minimal mode", () => {
    render = shallow(<Manga manga={manga} minimal={true} />);
    expect(render.contains(<Text>{manga.description}</Text>)).toBeFalsy();
  });

});
