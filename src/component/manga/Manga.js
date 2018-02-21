import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 30,
    margin: 5
  },
  head: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 100
  },
  thumbnail: {
    flex: 3,
    maxWidth: "100%",
    height: "auto",
    resizeMode: "stretch"
  },
  list: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  description: {
    paddingTop: 10,
    flex: 8
  },
  hr: {
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5
  }
});

const Manga = ({ manga, minimal, children }) => {
  let moreContent = null;
  if (!minimal) {
    moreContent = (
      <View style={styles.description}>
        <Text>{manga.description}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          style={styles.thumbnail}
          source={require("../../assets/images/book.png")}
        />

        <View style={styles.list}>
          <Text>{manga.title}</Text>
          <View style={styles.hr} />
          <Text>{manga.authors.join(" ")}</Text>
          <View style={styles.hr} />
          <Text>{manga.publishedDate}</Text>
        </View>
      </View>
      {moreContent}
      {children}
    </View>
  );
};

Manga.propTypes = {
  manga: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    publishedDate: PropTypes.string
  }),
  minimal: PropTypes.bool
};

export default Manga;
