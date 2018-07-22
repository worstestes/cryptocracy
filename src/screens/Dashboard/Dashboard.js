import React, { Component } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import DefaultTextInput from "../../UI/DefaultInput/DefaultInput";
import Icon from "react-native-vector-icons/Foundation";

import CryptoList from "../../components/CryptoList/CryptoList";
import GlobalMarketFeed from "../../components/GlobalMarketFeed/GlobalMarketFeed";

class Dashboard extends Component {
  static navigatorStyle = {
    navBarTranslucent: true,
    navBarBackgroundColor: "rgba(21,28,36,.5)",
    navBarTextColor: "#f1f3ef",
    navBarButtonColor: "#4d87a0"
  };

  state = {
    isLoaded: false,
    currencyData: [],
    totalMarketData: {},
    searchText: ""
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getcurrencyData().done();
    this.getTotalMarketData().done();
  }

  async getcurrencyData() {
    const URL = "https://api.coinmarketcap.com/v1/ticker/";
    const response = await fetch(URL);
    const json = await response.json();
    this.setState(prevState => {
      return {
        ...prevState,
        isLoaded: true,
        currencyData: json
      };
    });
  }

  async getTotalMarketData() {
    const URL = "https://api.coinmarketcap.com/v2/global/";
    const response = await fetch(URL);
    const json = await response.json();
    this.setState(prevState => {
      return {
        ...prevState,
        totalMarketData: {
          activeCurrencies: json.data.active_cryptocurrencies,
          activeMarkets: json.data.active_markets,
          bitcoinPercentage: json.data.bitcoin_percentage_of_market_cap,
          totalMarketCap: json.data.quotes.USD.total_market_cap,
          totalMarketVolume: json.data.quotes.USD.total_volume_24h
        }
      };
    });
  }

  coinSelectedHandler = name => {
    const coin = this.state.currencyData.find(coin => {
      return coin.name === name;
    });
    this.props.navigator.push({
      screen: "cryptocracy.CoinDetailScreen",
      passProps: {
        selectedCoin: coin
      }
    });
  };

  searchTextHandler = val => {
    this.setState(prevState => {
      return {
        ...prevState,
        searchText: val
      };
    });
  };

  render() {
    let content = (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#4d87a0" />
      </View>
    );

    if (this.state.isLoaded) {
      content = (
        <View style={styles.main}>
          <View style={styles.board}>
            <GlobalMarketFeed
              activeCurrencies={this.state.totalMarketData.activeCurrencies}
              activeMarkets={this.state.totalMarketData.activeMarkets}
              bitcoinPercentage={this.state.totalMarketData.bitcoinPercentage}
              totalMarketCap={this.state.totalMarketData.totalMarketCap}
              totalMarketVolume={this.state.totalMarketData.totalMarketVolume}
            />
          </View>
          <View style={styles.searchSection}>
            <Icon
              style={styles.searchIcon}
              name="magnifying-glass"
              size={20}
              color="#000"
            />
            <DefaultTextInput
              style={styles.input}
              placeholder="Search"
              onChangeText={val => this.searchTextHandler(val)}
              underlineColorAndroid="transparent"
            />
          </View>
          <CryptoList
            coins={this.state.currencyData}
            onSelect={this.coinSelectedHandler}
            searchedValue={this.state.searchText}
          />
        </View>
      );
    }

    return <View>{content}</View>;
  }
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 2
  },
  searchIcon: {
    padding: 10
  },
  input: {
    padding: 10,
    backgroundColor: "#fff",
    width: "50%",
    color: "#424242",
    borderRadius: 5
  },
  board: {
    padding: 30
  },
  loading: {
    marginTop: "70%"
  }
});

export default Dashboard;
