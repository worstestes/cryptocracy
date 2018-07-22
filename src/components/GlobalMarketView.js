import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const GlobalMarketView = props => {
  const colorCheck = props.coin.percentChangeHour.includes("-")
    ? "red"
    : "green";

  return (
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
            <Text style={styles.mainText}>{props.coin.marketCap}</Text>
            <Icon
              name={
                props.coin.percentChangeHour.includes("-")
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
              {props.coin.percentChangeHour}%
            </Text>
          </View>
        </View>
        <View style={styles.topData}>
          <Text style={styles.topDataTitleText}>Rank</Text>
          <View style={{ marginTop: 3 }}>
            <Text style={styles.mainText}>#{props.coin.rank}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomGlobalSection}>
        <View style={styles.bottomData}>
          <Text style={styles.topDataTitleText}>Volume(24h)</Text>
          <Text style={styles.mainText}>{props.coin.marketVol}</Text>
        </View>
        <View style={styles.bottomData}>
          <Text style={styles.topDataTitleText}>Avaiable Supply</Text>
          <Text style={styles.mainText}>
            {props.coin.supply} {props.coin.coinSymbol}
          </Text>
        </View>
      </View>
      <View style={styles.bottomGlobalSection}>
        <View style={styles.bottomData}>
          <Text style={styles.topDataTitleText}>Price To BTC</Text>
          <Text style={styles.mainText}>{props.coin.priceToBTC}</Text>
        </View>
        <View style={styles.bottomData}>
          <Text style={styles.topDataTitleText}>Price Change (7d)</Text>
          <Text style={styles.mainText}>{props.coin.percentChangeWeek}%</Text>
        </View>
      </View>
    </View>
  );
};

export default GlobalMarketView;

const styles = StyleSheet.create({
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
  topDataTitleText: {
    textAlign: "center",
    fontSize: 7,
    fontWeight: "bold",
    color: "#959799"
  },

  mainText: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold"
  }
});
