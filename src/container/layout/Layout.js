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
  toolbar: {
    height: 60,
    marginTop: 24,
    backgroundColor: "rgba(56, 95, 170, 1)"
  },
  children: {
    flex: 1
  }
});

class componentName extends Component {
  state = {
    showSidebar: false
  };

  actionHandler = event => {
    switch (action) {
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
          backgroundColor="rgba(56, 95, 170, 0.50)"
          animated
        />
        <ToolbarAndroid
          onActionSelected={this.actionHandler}
          onIconClicked={this.iconHandler}
          style={styles.toolbar}
          title="Manga Drein"
          titleColor="#fff"
          navIcon={require("../../assets/images/icons/menu_36px.png")}
          actions={[
            {
              title: "Settings",
              icon: require("../../assets/images/icons/settings.png"),
              show: "ifRoom"
            }
          ]}
        />
        <View style={styles.children}>{this.props.children}</View>
      </View>
    );
  }
}

componentName.propTypes = {};

export default componentName;
