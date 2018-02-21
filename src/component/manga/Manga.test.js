import React from "react";
import { Text } from "react-native";
import Manga from "./Manga";
import { shallow } from "enzyme";

const manga = {
  isbn: "2723442276",
  retailPrice: {
    amount: "",
    currencyCode: ""
  },
  pgaCount: 187,
  title: "The death and the strawberry",
  authors: ["Tite Kubo"],
  publishedDate: "2003-07-01",
  description:
    "Ichigo Kurosaki, un adolescent de quinze ans, possède le don de voir les esprits. Il croise un jour la route d'un être spirituel, une belle Shinigami, chassant un esprit maléfique. Mise en difficulté, la jeune fille prête une partie de ses pouvoirs à Ichigo. Celui-ci hérite bientôt de toute la puissance du Shinigami...",
  imageLinks: {
    smallThumbnail: "",
    thumbnail: ""
  }
};

describe("render", () => {
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
});
