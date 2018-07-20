import React, { Component } from "react";
import { ScrollView, View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from "react-native";
import validator from "validator";
import moment from "moment";
import FeaturedArticle from "../../UI/FeaturedArticles/FeaturedArticles";

class NewsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      articles: [],
      featuredArticles: [],
      isLoaded: false,
      first: {},
      second: {},
      third: {}
    };
  }

  componentDidMount() {
    this.getPopularArticles();
  }

  async getPopularArticles() {
    let newsSearch = "cryptocurrency+market";
    let currentDay = moment().format("YYYY-MM-DD");
    const URL = `https://newsapi.org/v2/everything?q=${newsSearch}&from=${currentDay}&sortBy=popularity&apiKey=4a74b7e09d814adfaa78b6daf6ba8935`;
    const response = await fetch(URL);
    const json = await response.json();

    let filteredArticles = json.articles.filter(article => {
      return validator.isAscii(article.title);
    });

    let articles = filteredArticles.slice(3, -1);
    let featuredArticles = filteredArticles.slice(0, 3);

    this.setState(prevState => {
      return {
        ...prevState,
        articles: articles,
        filteredArticles: filteredArticles,
        top: filteredArticles[0],
        subOne: filteredArticles[1],
        subTwo: filteredArticles[2],
        isLoaded: true
      };
    });
  }

  render() {
    if(this.state.isLoaded) {
      return (
        <View style={{flex: 1}}>
        <Text style={styles.title}>Most Recent</Text>
        <FeaturedArticle featuredList={this.state.filteredArticles} />
        {/* <View style={styles.topNews}>
        <Text style={{color: "white", fontSize: 30}}>{this.state.filteredArticles[0].title}</Text>
        </View> */}
        <Text style={styles.title}>More News</Text>
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
        </View>

      )
    }
    return (
      <View style={styles.topNews}>
      <ActivityIndicator size="large" color="coral" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginBottom: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(227, 228, 232)",
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
    fontSize: 13,
    fontWeight: "bold"
  },
  articleImage: {
    width: 90,
    height: 60,
    borderWidth: 2,
    borderColor: "#f1f3ef"
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    margin: 3
  }
});

export default NewsDisplay;
