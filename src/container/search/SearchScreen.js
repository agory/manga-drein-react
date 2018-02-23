import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";
import { MANGA_LIST } from "../../data/manga";
import MangaList from "../../component/manga-list/MangaList";
import { fetchSearchManga } from "../../service/MangaService";

class SearchScreen extends React.Component {
  state = {
    text: "",
    mangaList: []
  };

  searchHandler = text => {
    console.log("@Search-searchHandler :", text);

    this.setState({ text: text });
    fetchSearchManga(text).subscribe(
      list => {
        console.log("@Search-searchHandler :", list);
        this.setState({ mangaList: list });
      },
      error => console.error("@Search-searchHandler :", error)
    );
  };

  render() {
    return (
      <View>
        <TextInput onChangeText={this.searchHandler} value={this.state.text} />
        <MangaList mangaList={this.state.mangaList} />
      </View>
    );
  }
}

SearchScreen.propTypes = {};

export default SearchScreen;
