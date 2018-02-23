import React from "react";
import { View, TextInput, Text } from "react-native";
import PropTypes from "prop-types";
import { MANGA } from "../../data/manga";
import Manga from "../../component/manga/Manga";
import { fetchManga } from "../../service/MangaService";

class MangaScreen extends React.Component {


  state = {
    manga: null
  };

  componentDidMount() {
    const id = this.props.navigation.state.params.mangaId;
    // console.log("@MangaScreen-componentDidMount :", id);

    fetchManga(id).subscribe(manga => {
      this.setState({ manga });
    });
  }

  render() {
    if (this.state.manga) {
      return <Manga manga={this.state.manga} />;
    } else {
      return <Text>Loading ...</Text>;
    }
  }
}

MangaScreen.propTypes = {};

export default MangaScreen;
