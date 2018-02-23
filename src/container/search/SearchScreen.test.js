import React from "react";
import { TextInput } from "react-native";
import SearchScreen from "./SearchScreen";
import { shallow } from "enzyme";
import MangaList from "../../component/manga-list/MangaList";
import { MANGA_LIST } from "../../data/manga";

describe("render Search", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchScreen />);
  });

  it("should render text input empty", () => {
    const input = wrapper.find(TextInput);
    expect(input.prop("value")).toEqual("");
  });

  it("should render a mangaList with an empty array", () => {
    const list = wrapper.find(MangaList);
    expect(list.prop("mangaList")).toEqual([]);
  });

  it("should render a mangaList with all manga", () => {
    const input = wrapper.find(TextInput);
    input.simulate("changeText", "est");
    const list = wrapper.find(MangaList);
    expect(wrapper.state("text")).toEqual("est");
    expect(list.prop("mangaList")).toEqual(
      MANGA_LIST.filter(manga => manga.title.includes("est"))
    );
  });
});
