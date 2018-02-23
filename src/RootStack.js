import { StackNavigator } from "react-navigation";
import HomeScreen from "./container/home/HomeScreen";
import SearchScreen from "./container/search/SearchScreen";
import MangaScreen from "./container/manga/MangaScreen";

export default (RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Search: {
      screen: SearchScreen
    },
    Manga: {
      screen: MangaScreen
    }
  },
  {
    initialRouteName: "Home"
  }
));
