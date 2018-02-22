import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";
import { MANGA_LIST } from "../../data/manga";
import MangaList from "../../component/manga-list/MangaList";

class SearchScreen extends React.Component {
  state = {
    text: "",
    mangaList: MANGA_LIST
  };

  searchHandler = text => {
    this.setState({ text });
    // TODO Update Manga List
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
