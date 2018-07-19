import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

const Chart = props => {
 let data = props.dataSamples;

return (
  <View style={styles.container}>
<VictoryChart  theme={VictoryTheme.material}>
  <VictoryLine
    data={data}

  />
</VictoryChart>
  </View>

)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f3ef"
  }
});

export default Chart;
