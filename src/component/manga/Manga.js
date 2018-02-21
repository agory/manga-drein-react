import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    height: "100%",
    width: "100%"
  },
  thumbnail: {
    width: 120,
    height: 120
  },
  list: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    width: 190,
    marginLeft: 10,
    height: 125
  },
  description: {
    width: "100%",
    paddingTop: 10
  },
  card: {
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    width: 400,
    height: 300,
    padding: 30,
    margin: 5
  },
  hr: {
    borderBottomColor: "#333",
    borderBottomWidth: 0.5,
    marginTop: 5,
    marginBottom: 5
  }
});

const manga = ({ manga }) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.thumbnail}
            source={require("../../assets/images/book.png")}
          />
        </View>

        <View style={styles.list}>
          <Text>{manga.title}</Text>
          <View style={styles.hr} />
          <Text>{manga.authors.join(" ")}</Text>
          <View style={styles.hr} />
          <Text>{manga.publishedDate}</Text>
        </View>

        <View style={styles.description}>
          <Text>{manga.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default manga;
