import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Text, View, StyleSheet, Platform } from 'react-native';

const defaultButton = props => {
    const content = (
        <View
         style={[styles.button, props.style, { backgroundColor: props.color }]}
        >
        <Text>{props.children}</Text>
        </View>
    );

    if (Platform.OS === "android") {
        return (
          <TouchableNativeFeedback onPress={props.onPress}>
            {content}
          </TouchableNativeFeedback>
        );
      }

    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;

}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black"

    }
});

export default defaultButton;