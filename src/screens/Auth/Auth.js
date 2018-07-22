import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import HeadingText from "../../UI/HeadingText/HeadingText";
import DefaultTextInput from "../../UI/DefaultInput/DefaultInput";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";

class AuthScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <HeadingText style={styles.title}>Please Log In</HeadingText>
        </View>

        <View style={styles.inputContainer}>
          <DefaultTextInput style={styles.input} placeholder="Email" />
          <DefaultTextInput style={styles.input} placeholder="Password" />
        </View>
        <DefaultButton color="#4d87a0" onPress={this.loginHandler}>
          Submit
        </DefaultButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#151C24"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  title: {
    color: "white"
  }
});

export default AuthScreen;
