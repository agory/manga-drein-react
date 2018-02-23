import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  button: {
    padding: 5
  }
});

class DrawerButton extends React.Component {
  toggleHandler = () => {
    console.log("@DrawerButton-toggleHandler : ", this.props);
    this.props.navigation.navigate("DrawerToggle");
  };
  render() {
    return (
      <TouchableOpacity onPress={this.toggleHandler} style={styles.button}>
        <Icon name="menu" size={45} />
      </TouchableOpacity>
    );
  }
}

DrawerButton.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default DrawerButton;
