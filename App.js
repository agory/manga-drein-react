import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./src/container/layout/Layout";
import Home from "./src/container/home/Home";
export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}
