import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

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
      </View>
    );
  }
}
