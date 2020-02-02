import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ErrorLabel(props) {

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.heading]}>{props.title}</Text>
            <Text style={styles.text}>{props.description}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ef5350',
        padding: 20,
    },
    text: {
        color: "white",
        fontSize: 16,
        textAlign: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});