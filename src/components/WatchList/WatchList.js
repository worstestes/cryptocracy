import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import WatchListItem from "../WatchListItem/WatchListItem";

const WatchList = props => {
  return (
    <FlatList
      data={props.coins}
      renderItem={info => (
        <WatchListItem
          coinName={info.item.coin.name}
          coinSymbol={info.item.coin.symbol}
          price={info.item.coin.price_usd}
          rank={info.item.coin.rank}
          marketCap={info.item.coin.market_cap_usd}
          marketVol={info.item.coin["24h_volume_usd"]}
          percentChangeHour={info.item.coin.percent_change_1h}
        />
      )}
      keyExtractor={info => info.coin.id}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    height: "90%"
  }
});

export default WatchList;
