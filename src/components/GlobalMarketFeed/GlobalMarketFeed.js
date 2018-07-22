import React from "react";
import { View, Text, StyleSheet } from "react-native";
import numeral from "numeral";

const CurrencyGlobal = props => {
    let totalMarkets = props.activeMarkets;
    let totalCurrencies = props.activeCurrencies;
    let bitcoinDominance = props.bitcoinPercentage;
    let totalMarketCap = numeral(props.totalMarketCap)
    .format("(0.00 a)")
    .toUpperCase();
    let totalMarketVol = numeral(props.totalMarketVolume)
    .format("(0.00 a)")
    .toUpperCase();

    return (
      <View style={styles.mainContainer}>
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <Text style={styles.detailsTitle}>Market Cap</Text>
            <Text style={styles.detailsNums}>${totalMarketCap}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsTitle}>24h Volume</Text>
            <Text style={styles.detailsNums}>${totalMarketVol}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsTitle}>BTC Dominance</Text>
            <Text style={styles.detailsNums}>{bitcoinDominance}%</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsTitle}>Active Currencies</Text>
            <Text style={styles.detailsNums}>{totalCurrencies}</Text>
          </View>
        </View>
      </View>
    );
}
//#FAA687

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row"
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    shadowOpacity: 0.35,
    shadowRadius: 5,
    shadowColor: "#151C24",
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: "#f1f3ef",
    borderRadius: 3,
    height: 75,
    flex: 1.2
  },
  details: {
    flex: 1,
    alignItems: "center"
  },
  detailsTitle: {
    fontSize: 8,
    textAlign: "center",
    fontWeight: "bold"
  },
  detailsNums: {
    fontSize: 11
  }
});

export default CurrencyGlobal;
