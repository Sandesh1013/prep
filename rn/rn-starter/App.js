import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListScreen from "./src/screens/ListScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CScreen from "./src/screens/CScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentsScreen,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
