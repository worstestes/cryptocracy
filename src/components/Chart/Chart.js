import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import {
  VictoryArea,
  VictoryChart,
  VictoryContainer,
  VictoryLabel,
  VictoryAxis,
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

  if (props.isLoaded) {
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
            grid: { stroke: "coral" },
            ticks: { stroke: "black", size: 5 },
            tickLabels: { fontSize: 9 }
          }}
          dependentAxis
          tickFormat={tick => `$${tick}`}
        />
        <VictoryAxis
          style={{
            axis: { stroke: "black" },
            ticks: { stroke: "black", size: 5 },
            tickLabels: { fontSize: 7, marginRight: 3 }
          }}
          crossAxis
          tickFormat={tick => `${tick}`}
        />
        <VictoryArea
          data={props.graphingData}
          style={{
            data: {
              fill: "coral",
              fillOpacity: 0.7,
              // stroke: "#c43a31",
              strokeWidth: 3
            },
            parent: { border: "1px solid black" }
          }}
        />
      </VictoryChart>
    );
  }

  return <View style={styles.chartContainer}>{content}</View>;
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
