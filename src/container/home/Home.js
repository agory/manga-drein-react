import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Manga from "../../component/manga/Manga";
import { manga } from "../../data/manga";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Manga drein app with react native</Text>

        <Manga manga={manga} />
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: Home
  }
});
