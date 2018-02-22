import { StackNavigator } from "react-navigation";
import HomeScreen from "./container/home/HomeScreen";
import SearchScreen from "./container/search/SearchScreen";

export default (RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Search: {
      screen: SearchScreen
    }
  },
  {
    initialRouteName: "Home"
  }
));
