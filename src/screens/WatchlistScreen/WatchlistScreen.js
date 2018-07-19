import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import WatchList from '../../components/WatchList/WatchList';

class WatchlistScreen extends Component {
    static navigatorStyle = {
        navBarTranslucent: true,
        navBarBackgroundColor: "rgba(21,28,36,.33)",
        navBarTextColor: "#f1f3ef",
        navBarButtonColor: "#4d87a0"
      };

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.savedCoin);

        return (
            <View>
                <WatchList
                 coins={this.props.savedCoin}
                 />
            </View>
          );
    }

}

const styles = StyleSheet.create({
 mainContainer: {
    backgroundColor: "#151C24",
     flex: 1
 }
})

const mapStateToProps = state => {
    return {
      savedCoin: state.coin.coin
    };
  };

  
  export default connect(mapStateToProps)(WatchlistScreen);
  