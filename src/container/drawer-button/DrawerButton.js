import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";
import { withNavigation } from "react-navigation";

class DrawerButton extends React.Component {
  toggleHandler = () => {
    console.log("@DrawerButton-toggleHandler : ", this.props);
    this.props.navigation.navigate("DrawerToggle");
  };
  render() {
    return <Button title="D" onPress={this.toggleHandler} />;
  }
}

DrawerButton.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default DrawerButton;
