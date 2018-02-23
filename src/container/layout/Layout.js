import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  StyleSheet,
  Text,
  ToolbarAndroid,
  StatusBar
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  children: {
    marginTop: 24,
    flex: 1
  }
});

class componentName extends Component {
  state = {
    showSidebar: false
  };

  actionHandler = event => {
    switch (event) {
      case 0:
        console.log("Action : Setting");
        break;
    }
  };

  iconHandler = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
    console.log(this.state.showSidebar);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="rgba(126, 35, 30, 1)"
          animated
        />
        <View style={styles.children}>{this.props.children}</View>
      </View>
    );
  }
}

componentName.propTypes = {};

export default componentName;
