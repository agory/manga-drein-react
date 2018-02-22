import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";
import { manga } from "../../data/manga";
import Manga from "../../component/manga/Manga";

class MangaScreen extends React.Component {
  state = {
    manga: null
  };

  componentDidMount() {
    const id = this.props.navigation.state.mangaId;
    // TODO find manga by id
    this.setState({ manga: manga });
  }

  render() {
    return <Manga manga={this.state.manga} />;
  }
}

MangaScreen.propTypes = {};

export default MangaScreen;
