import React from "react";
import { FlatList } from "react-native";
import { shallow } from "enzyme";
import { mangaList } from "../../data/manga";
import MangaList from "./MangaList";
import Manga from "../manga/Manga";

describe("render Manga List", () => {
  it("should have a component FlatList with props data", () => {
    const wrapper = shallow(<MangaList mangaList={mangaList} />);
    let list = wrapper.find(FlatList);
    expect(list.prop("data")).toEqual(mangaList);
  });

  it("should work with empty array", () => {
    const wrapper = shallow(<MangaList mangaList={[]} />);
    let list = wrapper.find(FlatList);
    expect(list.prop("data")).toEqual([]);
  });
});
