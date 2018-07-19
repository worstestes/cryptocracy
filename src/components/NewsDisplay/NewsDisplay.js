import React, { Component } from "react";
import { View, Text, FlatList, Image, StyleSheet, Linking } from "react-native";
import validator from "validator";
import bc from "../../assets/blockchain.jpg";

class NewsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      articles: [],
    //   failed: false
    };
  }

  componentDidMount() {
    this.getNewsArticles().done();
  }

  async getNewsArticles() {
    let newsSearch = "crypto+currency+blockchain"
    const URL = `https://newsapi.org/v2/everything?q=${newsSearch}&from=2018-07-17&sortBy=popularity&apiKey=4a74b7e09d814adfaa78b6daf6ba8935`;
    const response = await fetch(URL);
    const json = await response.json();
    let filteredArticles = json.articles.filter(article => {
      return validator.isAscii(article.title);
    });
    this.setState(prevState => {
      return {
        ...prevState,
        articles: filteredArticles
      };
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={article => (
          <View style={styles.detailsContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.articleImage}
                source={{
                  uri: article.item.urlToImage
                }}
              />
            </View>

            <View style={styles.textContainer}>
              <View>
                <Text
                  style={styles.newsText}
                  onPress={() => Linking.openURL(article.item.url)}
                >
                  {article.item.title}
                </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={article => article.url}
      />
    );
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginBottom: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(104,122,143,0.83)"
  },
  textContainer: {
    flex: 0.7,
  },
  imageContainer: {
    alignItems: "center",
    flex: 0.3,
    marginTop: 10,
    marginBottom: 10,
  },
  newsText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold"
  },
  articleImage: {
    width: 90,
    height: 60,
    borderWidth: 2,
    borderColor: "#f1f3ef"
  }
});

export default NewsDisplay;
