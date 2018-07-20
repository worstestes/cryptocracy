import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import BackgroundImage from '../BackgroundImage/BackgroundImage';

const FeaturedArticle = props => (
  <View style={styles.mainContainer}>
    <View style={styles.topSection}>
      <View style={styles.topMainView}>
        <Image
          style={styles.featuredImage}
          source={{
            uri: props.featuredList[0].urlToImage
          }}
        />
        <View style={styles.userStyle}>
        <Text style={styles.topHeadline}>{props.featuredList[0].title}</Text>
        </View>
      </View>
    </View>
    <View style={styles.bottomSection}>
      <View style={styles.bottomSubView}>
        <Image
          style={styles.featuredImage}
          source={{
            uri: props.featuredList[1].urlToImage
          }}
        />
                <View style={styles.bottomSubTitleContainer}>
                  <Text style={styles.bottomHeadline}>{props.featuredList[1].title}</Text>
                </View>
      </View>
      
      <View style={styles.bottomSubView}>
        <Image
          style={styles.featuredImage}
          source={{
            uri: props.featuredList[2].urlToImage
          }}
        />
                       <View style={styles.bottomSubTitleContainer}>
                  <Text style={styles.bottomHeadline}>{props.featuredList[2].title}</Text>
                </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "53%",
    alignItems: "center",
  },
  topSection: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
  },
  topMainView: {
    flex: 1,
    width: "100%",
  },
  featuredImage: {
    flex: 1,
    width: "100%"
  },
  featuredSubImage: {
    flex: 1,
    width: "100%"
  },
  bottomSection: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
  },
  bottomSubView: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(21,28,36,.44)",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 2.5,
    marginRight: 2.5,
  },
  userStyle:{
    alignItems: 'center',
    justifyContent:'center',
    position : 'absolute',
    bottom : 0,
    top : "75%",
    left : 10,
    right : 0,
    backgroundColor: "#8ee4af",
    opacity: .9,
    width: "95%",
    height: 25
},
topHeadline: {
  color: "black",
  fontWeight: "bold",
  fontSize: 12,
  textAlign: "center"
},
bottomHeadline: {
  color: "white",
  fontWeight: "bold",
  fontSize: 12,
  textAlign: "center"
},
bottomSubTitleContainer: {
  alignItems: "center",
  marginTop: 10,
 flex: 1,
 height: "40%"
}
});

export default FeaturedArticle;
