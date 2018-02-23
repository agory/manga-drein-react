import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Manga from "../../component/manga/Manga";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class HomeScreen extends React.Component {
  searchHandler = () => {
    this.props.navigation.navigate("Search");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Manga drein app with react native</Text>
        <Button title="Search" onPress={this.searchHandler} />
      </View>
    );
  }
}
