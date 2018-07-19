import React from 'react';
import { Text, StyleSheet } from 'react-native';

const headingText = props => (
    <Text {...props} style={[styles.textHeader, props.style]}>{props.children}</Text>
)

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 25,
        fontWeight: "bold"
    }
});

export default headingText;