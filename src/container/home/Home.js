import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Manga from "../../component/manga/Manga";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});

const manga = {
  isbn: "2723442276",
  retailPrice: {
    amount: "",
    currencyCode: ""
  },
  pgaCount: 187,
  title: "The death and the strawberry",
  authors: ["Tite Kubo"],
  publishedDate: "2003-07-01",
  description:
    "Ichigo Kurosaki, un adolescent de quinze ans, possède le don de voir les esprits. Il croise un jour la route d'un être spirituel, une belle Shinigami, chassant un esprit maléfique. Mise en difficulté, la jeune fille prête une partie de ses pouvoirs à Ichigo. Celui-ci hérite bientôt de toute la puissance du Shinigami...",
  imageLinks: {
    smallThumbnail: "",
    thumbnail: ""
  }
};

export default class Home extends React.Component {
  onScanProduct = () => {
    console.log("Go to scan product");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Manga drein app with react native</Text>
        <Button
          onPress={this.onScanProduct}
          title="Scan a product"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Manga manga={manga} />
      </View>
    );
  }
}
