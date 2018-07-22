import React, { Component } from "react";
import { connect } from "react-redux";
import { addCoin } from "../../store/actions/index";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import numeral from "numeral";

import LineChartView from "../../components/LineChartView/LineChartView";
import CoinIcon from "../../UI/CoinIcon/CoinIcon";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";
import HeadingText from "../../UI/HeadingText/HeadingText";
import GlobalMarketView from "../../components/GlobalMarketView";

class CoinDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: {
        name: this.props.selectedCoin.name,
        coinSymbol: (coinSymbol = this.props.selectedCoin.symbol),
        price: this.props.selectedCoin.price,
        rank: this.props.selectedCoin.rank,
        marketCap: numeral(this.props.selectedCoin.market_cap_usd).format(
          "$0,0[.]00"
        ),
        marketVol: numeral(this.props.selectedCoin["24h_volume_usd"]).format(
          "$0,0[.]00"
        ),
        percentChangeHour: this.props.selectedCoin.percent_change_1h,
        percentChangeWeek: this.props.selectedCoin.percent_change_7d,
        supply: numeral(this.props.selectedCoin.available_supply).format(
          "0,0.00"
        ),
        priceToBTC: this.props.selectedCoin.price_btc
      }
    };
  }

  saveCoinHandler = () => {
    this.props.onAddCoin(this.props.selectedCoin);
  };

  onPress= () => {
    alert('Hello')
  }

  render() {
    colorCheck = this.state.coin.percentChangeHour.includes("-")
      ? "red"
      : "green";

    return (
      <View style={styles.main}>
        <View style={styles.coinHeaderContainer}>
          <CoinIcon
            style={{ margin: 2 }}
            coinSymbol={this.state.coin.coinSymbol}
            size={22}
            color="#8ee4af"
          />
          <HeadingText style={styles.coinHeaderTitle}>
            {this.state.coin.name}
          </HeadingText>
          <Text style={{ fontSize: 10, color: "white", marginBottom: 2 }}>
            [{this.state.coin.coinSymbol}]
          </Text>
        </View>
        <LineChartView symbol={this.state.coin.coinSymbol} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Global Market</Text>
        </View>
        <GlobalMarketView coin={this.state.coin} />
        <View style={styles.saveToWatchlist}>
          <DefaultButton
            style={{
              borderWidth: 0,
              shadowOpacity: 0.35,
              shadowRadius: 1,
              shadowColor: "black",
              shadowOffset: { height: 0, width: 0 }
            }}
            color="#8ee4af"
            onPress={() => alert("Pressed")}
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
  saveToWatchlist: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 5
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
