import React from "react";
import PropTypes from "prop-types";
import { FlatList, TouchableHighlight } from "react-native";
import Manga from "../manga/Manga";
import { MANGA } from "../../data/manga";

const MangaList = ({ mangaList, onClick }) => {
  return (
    <FlatList
      data={mangaList}
      keyExtractor={item => item.id}
      renderItem={item => (
        <TouchableHighlight
          underlayColor="#666"
          key={item.index}
          onPress={() => onClick(item.item)}
        >
          <Manga manga={item.item} minimal={true} />
        </TouchableHighlight>
      )}
    />
  );
};

MangaList.propTypes = {
  mangaList: PropTypes.array.isRequired,
  onClick: PropTypes.func
};

export default MangaList;
