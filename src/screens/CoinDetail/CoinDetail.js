import React, { Component } from "react";
import { connect } from "react-redux";
import { addCoin, deleteCoin } from "../../store/actions/index";
import {
  Dimensions,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal
} from "react-native";
import numeral from "numeral";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import NewsDisplay from "../../components/NewsDisplay/NewsDisplay";
import LineChart from "../../components/LineChart/LineChart";
import CoinIcon from "../../UI/CoinIcon/CoinIcon";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";

class CoinDetail extends Component {
  constructor(props) {
    super(props);
  }

  saveCoinHandler = () => {
    this.props.onAddCoin(this.props.selectedCoin);
  };

  render() {
    const name = this.props.selectedCoin.name;
    const coinSymbol = this.props.selectedCoin.symbol;
    const price = this.props.selectedCoin.price;
    const rank = this.props.selectedCoin.rank;
    const marketCap = numeral(this.props.selectedCoin.market_cap_usd).format(
      "$0,0[.]00"
    );
    const marketVol = numeral(this.props.selectedCoin["24h_volume_usd"]).format(
      "$0,0[.]00"
    );
    const percentChangeHour = this.props.selectedCoin.percent_change_1h;
    const percentChangeWeek = this.props.selectedCoin.percent_change_7d;
    const supply = numeral(this.props.selectedCoin.available_supply).format(
      "0,0.00"
    );
    const priceToBTC = this.props.selectedCoin.price_btc;

    let colorCheck = percentChangeHour.includes("-") ? "red" : "green";

    return (
      <View style={styles.main}>
        <View style={styles.coinHeaderContainer}>
          <CoinIcon
            style={{ margin: 2 }}
            coinSymbol={coinSymbol}
            size={22}
            color="#8ee4af"
          />
          <Text style={styles.coinHeaderTitle}>{name}</Text>
          <Text style={{ fontSize: 10, color: "white", marginBottom: 2 }}>
            [{coinSymbol}]
          </Text>
        </View>
        <View style={styles.chartContainer}>
          {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>Graphs</Text>
          </View> */}
          <LineChart symbol={coinSymbol} />
        </View>

        {/* <View style={styles.titleContainer}>
          <Text style={styles.title}>Global Market</Text>
        </View> */}
        <View style={styles.globalMarketData}>
          <View style={styles.topGlobalSection}>
            <View style={styles.topData}>
              <Text style={styles.topDataTitleText}>Market Cap</Text>
              <View
                style={{
                  alignSelf: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10
                }}
              >
                <Text style={styles.mainText}>{marketCap}</Text>
                <Icon
                  name={
                    percentChangeHour.includes("-")
                      ? "trending-down"
                      : "trending-up"
                  }
                  color={colorCheck}
                  style={{ paddingLeft: 3, paddingRight: 3 }}
                  size={15}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                    color: colorCheck
                  }}
                >
                  {percentChangeHour}%
                </Text>
              </View>
            </View>
            <View style={styles.topData}>
              <Text style={styles.topDataTitleText}>Rank</Text>
              <View style={{ marginTop: 3 }}>
                <Text style={styles.mainText}>#{rank}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomGlobalSection}>
            <View style={styles.bottomData}>
              <Text style={styles.topDataTitleText}>Volume(24h)</Text>
              <Text style={styles.mainText}>{marketVol}</Text>
            </View>
            <View style={styles.bottomData}>
              <Text style={styles.topDataTitleText}>Avaiable Supply</Text>
              <Text style={styles.mainText}>
                {supply} {coinSymbol}
              </Text>
            </View>
          </View>
          <View style={styles.bottomGlobalSection}>
            <View style={styles.bottomData}>
              <Text style={styles.topDataTitleText}>Price To BTC</Text>
              <Text style={styles.mainText}>{priceToBTC}</Text>
            </View>
            <View style={styles.bottomData}>
              <Text style={styles.topDataTitleText}>Price Change (7d)</Text>
              <Text style={styles.mainText}>{percentChangeWeek}%</Text>
            </View>
          </View>
        </View>
        <View style={styles.saveDelete}>
          <DefaultButton
            style={{
              borderWidth: 0,
              shadowOpacity: 0.35,
              shadowRadius: 1,
              shadowColor: "black",
              shadowOffset: { height: 0, width: 0 }
            }}
            color="#8ee4af"
            onPress={this.saveCoinHandler}
          >
            <Text style={{ fontSize: 10 }}>Watch</Text>
          </DefaultButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "rgba(104,122,143,0.75)"
  },
  coinHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 15
  },
  coinHeaderTitle: {
    paddingLeft: 5,
    paddingRight: 2,
    fontSize: 23,
    color: "white",
    fontWeight: "bold"
  },
  saveDelete: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 5
  },
  chartContainer: {
    justifyContent: "center",
    alignSelf: "center",
    height: 280,
    width: "80%",
    shadowOpacity: 0.35,
    shadowRadius: 1,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: "rgba(241,243,239,.9)",
    borderRadius: 3,
    marginBottom: 10
  },
  globalMarketData: {
    alignSelf: "center",
    width: "80%",
    height: 125,
    shadowOpacity: 0.35,
    shadowRadius: 1,
    shadowColor: "#151C24",
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: "#f1f3ef",
    borderRadius: 3
  },
  titleContainer: {
    alignItems: "center",
    alignSelf: "flex-start",
    marginLeft: 38,
    paddingBottom: 3
  },
  title: {
    textAlign: "left",
    fontSize: 9,
    color: "white"
  },
  topGlobalSection: {
    flexDirection: "row",
    width: "100%",
    marginTop: 8,
    borderBottomWidth: 1.9,
    borderColor: "rgba(104,122,143,0.1)"
  },
  topData: {
    flex: 1,
    marginBottom: 5,
    alignSelf: "flex-start"
  },
  topDataTitleText: {
    textAlign: "center",
    fontSize: 7,
    fontWeight: "bold",
    color: "#959799"
  },
  bottomGlobalSection: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10
  },
  bottomData: {
    flex: 1,
    marginBottom: 5,
    alignSelf: "flex-start",
    alignItems: "center"
  },
  mainText: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddCoin: coin => dispatch(addCoin(coin))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CoinDetail);

// titleContainer: {
//   alignItems: "center",
//   backgroundColor: 'rgba(241,243,239,.3)',
//   borderRadius: 3,
//   width: "30%"

// },
// newsTitle: {
//   fontWeight: "bold",
//   color: "white"
// },
// newsContainer: {
// },
