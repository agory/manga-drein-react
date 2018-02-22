import React from "react";
import { TextInput } from "react-native";
import MangaScreen from "./MangaScreen";
import { shallow } from "enzyme";
import Manga from "../../component/manga/Manga";
import { manga } from "../../data/manga";

describe("render MangaScreen", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MangaScreen navigation={{ state: { mangaId: 1 } }} />);
  });

  it("should render a manga", () => {
    const item = wrapper.find(Manga);
    expect(item.prop("manga")).toEqual(manga);
  });
});
