import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Chart from "../../UI/Chart/Chart";
import moment from "moment";

class LineChartView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: props.symbol,
      isLoaded: false,
      graphingData: [],
      dateRangeChange: 7
    };
  }

  componentDidMount() {
    this.getChartingData();
  }

  async getChartingData() {
    let graphDataArray = [];

    for (
      let weekNumber = 0;
      weekNumber <= this.state.dateRangeChange;
      weekNumber++
    ) {
      let weeksFromCurrentDay = moment()
        .subtract(this.state.dateRangeChange * weekNumber, "days")
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
        <View style={styles.navChartSection}>
          <View style={styles.tabPickContainer}>
            <TouchableOpacity style={styles.tabPick}>
              <Text style={{ fontSize: 9, paddingRight: 3 }}>1WK</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabPick}>
              <Text style={{ fontSize: 9, paddingRight: 3 }}>2WK</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabPick}>
              <Text style={{ fontSize: 9, paddingRight: 3 }}>3WK</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabPick}>
              <Text style={{ fontSize: 9, paddingRight: 3 }}>4WK</Text>
            </TouchableOpacity>
          </View>
        </View>

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
  },
  navChartSection: {
    width: "100%",
    backgroundColor: "coral",
    borderBottomWidth: 5,
    borderColor: "#f1f3ef"
  },
  tabPickContainer: {
    flexDirection: "row",
    width: "40%",
    height: 25,
    margin: 2
  },
  tabPick: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%",
    backgroundColor: "yellow"
  }
});

export default LineChartView;

// return <Chart graphingData={this.state.graphingData} isLoaded={this.state.isLoaded}/>;
