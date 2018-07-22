import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import moment from "moment";
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
        <View style={styles.topHeadlineBackground}>
          <Text style={styles.topHeadline}>{props.featuredList[0].title}</Text>
        </View>
      </View>
    </View>
    <View style={styles.bottomSection}>
      <View style={styles.bottomSubView}>
        <Image
          style={styles.featuredSubImage}
          source={{
            uri: props.featuredList[1].urlToImage
          }}
        />
        <View style={styles.bottomSubTitleContainer}>
          <Text style={styles.bottomHeadline}>
            {props.featuredList[1].title}
          </Text>
          <Text style={styles.publishedTime}>
            {moment(props.featuredList[1].publishedAt).fromNow()}
          </Text>
        </View>
      </View>

      <View style={styles.bottomSubView}>
        <Image
          style={styles.featuredSubImage}
          source={{
            uri: props.featuredList[2].urlToImage
          }}
        />
        <View style={styles.bottomSubTitleContainer}>
          <Text style={styles.bottomHeadline}>
            {props.featuredList[2].title}
          </Text>
          <Text style={styles.publishedTime}>
            {moment(props.featuredList[2].publishedAt).fromNow()}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "53%",
    alignItems: "center"
  },
  topSection: {
    flexDirection: "row",
    width: "100%",
    height: "55%"
  },
  topMainView: {
    flex: 1,
    width: "100%"
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
    height: "45%"
  },
  bottomSubView: {
    flex: 1,
    width: "100%",
    shadowOpacity: 0.35,
    shadowRadius: 1,
    shadowColor: "#151C24",
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: "#f1f3ef",
    marginTop: 5,
    marginLeft: 2.5,
    marginRight: 2.5,
    paddingBottom: 5
  },
  topHeadlineBackground: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    top: "75%",
    left: 0,
    right: 0,
    backgroundColor: "#8ee4af",
    width: "100%",
    height: 30
  },
  topHeadline: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center"
  },
  bottomHeadline: {
    fontWeight: "bold",
    fontSize: 11,
    textAlign: "center"
  },
  bottomSubTitleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  publishedTime: {
    marginTop: 4,
    fontSize: 8
  }
});

export default FeaturedArticle;
