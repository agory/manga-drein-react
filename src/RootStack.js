import { StackNavigator } from "react-navigation";
import Home from "./container/home/Home";
import Search from "./container/search/Search";

export default RootStack = StackNavigator(
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
