import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  StyleSheet
} from "react-native";
import Chart from "../Chart/Chart";
import DefaultButton from "../../UI/DefaultButton/DefaultButton"
import moment from "moment";
import SimplePicker from 'react-native-simple-picker'

class LineChartView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: props.symbol,
      isLoaded: false,
      graphingData: []
    };
  }

  componentDidMount() {
    this.getChartingData();
  }

  async getChartingData() {
    let graphDataArray = [];  
    for (let weekNumber = 0; weekNumber <= 8; weekNumber++) {
      let weeksFromCurrentDay = moment()
        .subtract(7 * weekNumber, "days")
        .unix();
      let URL = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${
        this.state.symbol
      }&tsyms=USD&ts=${weeksFromCurrentDay}`;

      let response = await fetch(URL);
      let json = await response.json();
      let dateString = moment.unix(weeksFromCurrentDay).format("MMM D");

      let datePricePairObject = {
        x: dateString,
        y: json[this.state.symbol].USD
      };
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
    return (
      <View style={styles.chartContainer}>
        <Chart
          graphingData={this.state.graphingData}
          isLoaded={this.state.isLoaded}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    justifyContent: "center",
    alignSelf: "center",
    height: 270,
    width: "80%",
    shadowOpacity: 0.35,
    shadowRadius: 1,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: "rgba(241,243,239,.9)",
    borderRadius: 3,
    marginBottom: 10
  }
});

export default LineChartView;

// return <Chart graphingData={this.state.graphingData} isLoaded={this.state.isLoaded}/>;
