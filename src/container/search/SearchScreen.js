import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";
import { MANGA_LIST } from "../../data/manga";
import MangaList from "../../component/manga-list/MangaList";
import { fetchSearchManga } from "../../service/MangaService";

class SearchScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Search",
    title: "Search"
  };

  state = {
    text: "",
    mangaList: []
  };

  searchHandler = text => {
    // console.log("@Search-searchHandler :", text);
    this.setState({ text: text });
    if (!text) {
      return this.setState({ mangaList: [] });
    }
    fetchSearchManga(text).subscribe(
      list => {
        // console.log("@Search-searchHandler :", list);
        this.setState({ mangaList: list });
      },
      error => console.error("@Search-searchHandler :", error)
    );
  };

  onClickHandler = manga => {
    // console.log("@Search-onClickHandler :", manga);
    this.props.navigation.navigate("Manga", {
      mangaId: manga.id
    });
  };

  render() {
    let mangaListComponent = null;
    if (this.state.mangaList) {
      mangaListComponent = (
        <MangaList
          mangaList={this.state.mangaList}
          onClick={this.onClickHandler}
        />
      );
    }
    return (
      <View>
        <TextInput onChangeText={this.searchHandler} value={this.state.text} />
        {mangaListComponent}
      </View>
    );
  }
}

SearchScreen.propTypes = {};

export default SearchScreen;
