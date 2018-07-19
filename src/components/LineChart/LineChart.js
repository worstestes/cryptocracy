import React, { Component } from "react";
import { LineChart, XAxis, YAxis, Grid } from "react-native-svg-charts";
import {
  VictoryLine,
  VictoryChart,
  VictoryContainer,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis
} from "victory-native";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
// import Chart from "../../UI/Chart/Chart";
import moment from "moment";

import placeholderImage from "../../assets/market-price.png";

class LineChark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: props.symbol,
      isLoaded: false,
      graphingData: [],
      dateRangeChange: {
        twoWeeks: 1,
        oneMonth: 3,
        twoMonths: 7,
        threeMonths: 11
      }
    };
  }

  componentDidMount() {
    this.getChartingData();
  }

  async getChartingData() {
    let graphDataArray = [];

    for(let weekNumber = 0; weekNumber <= 7; weekNumber++) {
      let datePricePairObject = {};
      let weeksFromCurrentDay = moment().subtract((7*weekNumber), 'days').unix();
      let URL = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${
        this.state.symbol
      }&tsyms=USD&ts=${weeksFromCurrentDay}`

      let response = await fetch(URL);
      let json = await response.json();
      let dateString = moment.unix(weeksFromCurrentDay).format("MMM D");

      datePricePairObject.x = dateString;
      datePricePairObject.y = json[this.state.symbol].USD;
      graphDataArray.push(datePricePairObject);
    }

    this.setState(prevState => {
      return {
        ...prevState,
        graphingData: graphDataArray.reverse(),
        isLoaded: true
      };
    });
  }


  render() {
    let content = (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#8ee4af" />
      </View>
    );

    if (this.state.isLoaded) {
      let maxYDomain =  Math.max.apply(Math, this.state.graphingData.map(function(o) { return o.y; }));
      let minYDomain =  Math.min.apply(Math, this.state.graphingData.map(function(o) { return o.y; }));

      content = (
        <VictoryChart
          width={300}
          height={300}
          containerComponent={<VictoryContainer responsive={false} />}
          minDomain={{y: minYDomain - (minYDomain*.25)}}
          maxDomain={{y: maxYDomain + (maxYDomain*.15)}}
        >
          <VictoryAxis
            style={{
              axis: {stroke: "black"},
              // grid: {stroke: (t) => t > 0.5 ? "black" : "red"},
              ticks: {stroke: "grey", size: 5},
              tickLabels: {fontSize: 8}
            }}
            dependentAxis
            tickFormat={tick => `$${tick}`}
          />
          <VictoryAxis
            style={{
              axis: {stroke: "#756f6a"},
              ticks: {stroke: "grey", size: 5},
              tickLabels: {fontSize: 8, padding: 5}
            }}
            crossAxis
            tickFormat={tick => `${tick}`}
          />
          <VictoryLine data={this.state.graphingData}
            style={{
              data: { stroke: "red" },
              parent: { border: "1px solid #ccc"}
            }}
          />
        </VictoryChart>
      );
    }

    return <View style={styles.chartContainer}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  loading: {}
});

export default LineChark;

// }
//     const data = [ 50, 10, 40, 95, 4, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80 ]

//         const contentInset = { top: 20, bottom: 20 }
// <View style={styles.chartContainer}>
// <View style={{ height: 200, flexDirection: 'row' }}>
//     <YAxis
//         data={ data }
//         contentInset={ contentInset }
//         svg={{
//             fill: 'grey',
//             fontSize: 10,
//         }}
//         numberOfTicks={ 10 }
//         formatLabel={ value => `$${value}00` }
//     />
//     <LineChart
//         style={{ flex: 1, marginLeft: 16 }}
//         data={ data }
//         svg={{ stroke: 'rgb(134, 65, 244)' }}
//         contentInset={ contentInset }
//     >
//         <Grid/>
//     </LineChart>
// </View>
// </View>
