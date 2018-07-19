import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import numeral from "numeral";
import CoinIcon from '../../UI/CoinIcon/CoinIcon';


const CryptoListItem = props => {
  let name = props.coinName;
  let marketCap = numeral(props.marketCap)
    .format("(0.00 a)")
    .toUpperCase();
  let marketVol = numeral(props.marketVol)
    .format("(0.00 a)")
    .toUpperCase();
  let price = numeral(props.price).format('$0,0.00');
  let percentChangeHour = `${props.percentChangeHour}%`;

  return (
    <TouchableOpacity onPress={() => props.onItemSelected(props.coinName)}>
      <View style={styles.listItem}>
        <View style={styles.rankIcon}>
          <Text style={styles.coinRank}>{props.rank}</Text>
        <CoinIcon coinSymbol={props.coinSymbol} size={30} color="#8ee4af"/>
        </View>
        <View>
              <Text style={styles.coinName}>{name}</Text>
              <View style={styles.coinPriceContainer}>
                <Text style={styles.coinPrice}>{price}</Text>
                <Text style={percentChangeHour.includes('-') ? styles.coinNegativeHourChange : styles.coinPositiveHourChange}>({percentChangeHour.includes('-') ? percentChangeHour : `+${percentChangeHour}`})</Text>
              </View>
        </View>
        <View style={styles.market}>
            <View>
              <Text style={styles.coinCap}>${marketCap}</Text>
              <Text style={styles.coinVol}>${marketVol}</Text>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    marginBottom: 3,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(104,122,143,0.75)"
  },
  coinName: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 14
  },
  coinPriceContainer: {
    flexDirection: "row",
    paddingTop: 1
    },
  coinPrice: {
    fontWeight: "bold",
    color: "white",
    fontSize: 12,
    marginLeft: 10
  },
  coinPositiveHourChange: {
    fontWeight: "bold",
    color: '#86f074',
    fontSize: 12,
    marginLeft: 10,
  },
  coinNegativeHourChange:{
    fontWeight: "bold",
    color: "#ff0000",
    fontSize: 12,
    marginLeft: 10,
  },
  coinCap: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "right"    
  },
  coinVol: {
    color: "#dfdfdf",
    fontSize: 11,
    marginLeft: 10,
    textAlign: "right"    
  },
  coinRank: {
    paddingRight: 10,
    margin: 5
  },
  market: {
    flex: 1, alignItems: "flex-end"
    },
    rankIcon: {
      flexDirection: "row",
      paddingRight: 5
    }
});

export default CryptoListItem;
