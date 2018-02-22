import React from "react";
import { FlatList } from "react-native";
import { shallow } from "enzyme";
import { MANGA_LIST } from "../../data/manga";
import MangaList from "./MangaList";
import Manga from "../manga/Manga";

describe("render Manga List", () => {
  it("should have a component FlatList with props data", () => {
    const wrapper = shallow(<MangaList mangaList={MANGA_LIST} />);
    let list = wrapper.find(FlatList);
    expect(list.prop("data")).toEqual(MANGA_LIST);
  });

  it("should work with empty array", () => {
    const wrapper = shallow(<MangaList mangaList={[]} />);
    let list = wrapper.find(FlatList);
    expect(list.prop("data")).toEqual([]);
  });
});
