import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import CryptoListItem from "../CryptoListItem/CryptoListItem";

const CryptoList = props => {
  const searchedTextValue = props.coins.filter(coin =>
    coin.name.includes(props.searchedValue)
  );

  return (
    <FlatList
      style={styles.listContainer}
      data={props.searchedText !== "" ? searchedTextValue : props.coins}
      renderItem={info => (
        <CryptoListItem
          coinName={info.item.name}
          coinSymbol={info.item.symbol}
          price={info.item.price_usd}
          rank={info.item.rank}
          marketCap={info.item.market_cap_usd}
          marketVol={info.item["24h_volume_usd"]}
          percentChangeHour={info.item.percent_change_1h}
          onItemSelected={() => props.onSelect(info.item.name)}
        />
      )}
      keyExtractor={info => info.id}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    height: "90%"
  }
});

export default CryptoList;
