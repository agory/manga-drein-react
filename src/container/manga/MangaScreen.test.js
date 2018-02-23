import React from "react";
import { TextInput } from "react-native";
import MangaScreen from "./MangaScreen";
import { shallow } from "enzyme";
import Manga from "../../component/manga/Manga";
import { MANGA } from "../../data/manga";

describe("render MangaScreen", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MangaScreen
        navigation={{
          state: { params: { mangaId: "5a8fe815ed77d9a67a67f7cb" } }
        }}
      />
    );
  });

  it("should render a manga", () => {
    const item = wrapper.find(Manga);
    expect(item.prop("manga")).toEqual(MANGA);
  });
});
