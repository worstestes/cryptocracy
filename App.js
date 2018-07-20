import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import DashboardScreen from "./src/screens/Dashboard/Dashboard";
import WatchlistScreen from "./src/screens/WatchlistScreen/WatchlistScreen";
import CoinDetailScreen from "./src/screens/CoinDetail/CoinDetail";
import NewsListScreen from "./src/screens/NewsListScreen/NewsListScreen";
import configureStore from "./src/store/configureStore";

const store = configureStore();
// Register Screens
Navigation.registerComponent("cryptocracy.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("cryptocracy.DashboardScreen", () => DashboardScreen, store, Provider);
Navigation.registerComponent("cryptocracy.WatchlistScreen", () => WatchlistScreen, store, Provider);
Navigation.registerComponent("cryptocracy.CoinDetailScreen", () => CoinDetailScreen, store, Provider);
Navigation.registerComponent("cryptocracy.NewsListScreen", () => NewsListScreen, store, Provider);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "cryptocracy.AuthScreen",
    title: "Login"
  }
});