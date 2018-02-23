import React from "react";
import { Button } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import HomeScreen from "./container/home/HomeScreen";
import SearchScreen from "./container/search/SearchScreen";
import MangaScreen from "./container/manga/MangaScreen";
import DrawerButton from "./container/drawer-button/DrawerButton";

const MainStack = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Search: {
      screen: SearchScreen
    }
  },
  { initialRouteName: "Home" }
);

export default (RootStack = StackNavigator(
  {
    MainStack: {
      screen: MainStack
    },
    Manga: {
      screen: MangaScreen
    }
  },
  {
    initialRouteName: "MainStack",
    navigationOptions:  ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#a3311e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: <DrawerButton navigation={navigation} />
    })
  }
));
