import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Foundation'
import maIcon from "react-native-vector-icons/MaterialCommunityIcons";

const startTabs = () => {
    Promise.all([
        maIcon.getImageSource("chart-areaspline", 30),
        Icon.getImageSource("eye", 35),
        maIcon.getImageSource("codepen", 30),
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "cryptocracy.DashboardScreen",
                    label: "Markets",
                    title: "Markets",
                    icon: sources[0]
                },
                {
                    screen: "cryptocracy.WatchlistScreen",
                    label: "Watchlist",
                    title: "Watchlist",
                    icon: sources[1]
                },
                {
                    screen: "cryptocracy.NewsListScreen",
                    label: "News",
                    title: "News",
                    icon: sources[2]
                }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "#4d87a0",
                tabBarBackgroundColor: "#151C24"
            },
            appStyle: {
                keepStyleAcrossPush: true
              }
        })
    })
}

export default startTabs;