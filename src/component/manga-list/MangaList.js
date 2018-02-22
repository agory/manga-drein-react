import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import Manga from "../manga/Manga";
import { MANGA } from "../../data/manga";

const MangaList = ({ mangaList }) => {
  return (
    <FlatList
      data={mangaList}
      keyExtractor={item => item.id}
      renderItem={item => (
        <Manga key={item.index} manga={item.item} minimal={true} />
      )}
    />
  );
};

MangaList.propTypes = {
  mangaList: PropTypes.array
};

export default MangaList;
