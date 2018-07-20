import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import {
  VictoryLine,
  VictoryChart,
  VictoryContainer,
  VictoryLabel,
  VictoryAxis
} from "victory-native";

const Chart = props => {
  let maxYDomain = Math.max.apply(
    Math,
    props.graphingData.map(function(o) {
      return o.y;
    })
  );
  let minYDomain = Math.min.apply(
    Math,
    props.graphingData.map(function(o) {
      return o.y;
    })
  );

  let content = (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#8ee4af" />
    </View>
  );

  if(props.isLoaded) {
    content = (
      <VictoryChart
      width={300}
      height={300}
      containerComponent={<VictoryContainer responsive={false} />}
      minDomain={{ y: minYDomain - minYDomain * 0.25 }}
      maxDomain={{ y: maxYDomain + maxYDomain * 0.15 }}
    >
      <VictoryAxis
        style={{
          axis: { stroke: "black" },
          // grid: {stroke: (t) => t > 0.5 ? "black" : "red"},
          ticks: { stroke: "grey", size: 5 },
          tickLabels: { fontSize: 8 }
        }}
        dependentAxis
        tickFormat={tick => `$${tick}`}
      />
      <VictoryAxis
        style={{
          axis: { stroke: "#756f6a" },
          ticks: { stroke: "grey", size: 5 },
          tickLabels: { fontSize: 8, padding: 5 }
        }}
        crossAxis
        tickFormat={tick => `${tick}`}
      />
      <VictoryLine
        data={props.graphingData}
        style={{
          data: { stroke: "red" },
          parent: { border: "1px solid #ccc" }
        }}
      />
    </VictoryChart>
    )
  }

  return (
    <View style={styles.chartContainer}>{content}</View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
});

export default Chart;
