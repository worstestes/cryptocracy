import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NewsDisplay from '../../components/NewsDisplay/NewsDisplay';

class NewsBoard extends Component {
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
        return (
            <View style={styles.mainContainer}>
                <NewsDisplay />
            </View>
        )
    }
}

const styles = StyleSheet.create({
 mainContainer: {
    backgroundColor: "rgba(144, 159, 165, .4)",
     flex: 1
 }
})


  
  export default NewsBoard;
  