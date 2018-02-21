import React from "react";
import { FlatList } from "react-native";
import { shallow } from "enzyme";
import { mangaList } from "../../data/manga";
import MangaList from "./MangaList";
import Manga from "../manga/Manga";

describe("render Manga List", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MangaList mangaList={mangaList} />);
  });

  it("should have a component FlatList with props data", () => {
    let list = wrapper.find(FlatList);
    expect(list.prop("data")).toEqual(mangaList);
  });
});
