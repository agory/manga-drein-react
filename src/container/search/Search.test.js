import React from "react";
import { TextInput } from "react-native";
import Search from "./Search";
import { shallow } from "enzyme";
import MangaList from "../../component/manga-list/MangaList";
import { mangaList } from "../../data/manga";

describe("render Search", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it("should render text input empty", () => {
    const input = wrapper.find(TextInput);
    expect(input.prop("value")).toEqual("");
  });

  it("should render a mangaList with mangaList data", () => {
    const list = wrapper.find(MangaList);
    console.log(list);
    expect(list.prop("mangaList")).toEqual(mangaList);
  });
});
