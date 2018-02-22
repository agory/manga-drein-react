import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import Layout from "./src/container/layout/Layout";
import Home from "./src/container/home/Home";
import Search from "./src/container/search/Search";

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home
    },
    Search: {
      screen: Search
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <RootStack />
      </Layout>
    );
  }
}
