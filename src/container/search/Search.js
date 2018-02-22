import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";
import { mangaList } from "../../data/manga";
import MangaList from "../../component/manga-list/MangaList";

class Search extends React.Component {
  state = {
    text: "",
    mangaList: mangaList
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

Search.propTypes = {};

export default Search;
