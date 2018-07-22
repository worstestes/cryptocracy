import React, { Component } from "react";
import { ScrollView, View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Linking } from "react-native";
import validator from "validator";
import moment from "moment";
import FeaturedArticle from "./FeaturedArticles"
import bc from '../../assets/blockchain.jpg';

class NewsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      articles: [],
      featuredArticles: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.getPopularArticles().then();
  }

  async getPopularArticles() {
    let newsSearch = "crypto+blockchain";
    let currentDay = moment().format("YYYY-MM-DD");
    const URL = `https://newsapi.org/v2/everything?q=${newsSearch}&from=${currentDay}&sortBy=publishedat&apiKey=4a74b7e09d814adfaa78b6daf6ba8935`;
    const response = await fetch(URL);
    const json = await response.json();
    console.log(URL);
    let filteredArticles = json.articles.filter(article => {
      if(validator.isAscii(article.title) && article.urlToImage !== null && article.urlToImage !== ""){
        return article;
      }
    });

    let articles = filteredArticles.slice(3);
    let featuredArticles = filteredArticles.slice(0, 3);

    this.setState(prevState => {
      return {
        ...prevState,
        articles: articles,
        filteredArticles: featuredArticles,
        isLoaded: true
      };
    });
  }

  render() {
    if(this.state.isLoaded && this.state.filteredArticles.length) {
      return (
        <View style={{flex: 1}}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Most Recent</Text>
        </View> 
        <FeaturedArticle featuredList={this.state.filteredArticles} />
        <View style={styles.titleContainer}>
        <Text style={styles.title}>More News</Text>
        </View> 
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
                  <Text style={styles.publishedTime}>{moment(article.item.publishedAt).fromNow()}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={article => article.url}
        />
        </View>

      )
    }
    return (
      <View style={styles.loading}>
      <ActivityIndicator size="large" color="#8ee4af" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginBottom: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f3ef",
        marginLeft: 3,
    marginRight: 3,
    marginTop: 1
  },
  textContainer: {
    flex: 0.7
  },
  imageContainer: {
    alignItems: "center",
    flex: 0.3,
    marginTop: 10,
    marginBottom: 10
  },
  newsText: {
    fontSize: 11,
    fontWeight: "bold"
  },
  articleImage: {
    width: 90,
    height: 60,
    borderWidth: .5,
    borderColor: "#151C24",
  },
  titleContainer: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white"
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  publishedTime: {
    marginTop: 5,
    fontSize: 8
  }
});

export default NewsDisplay;
