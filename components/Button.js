import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Colors from '../constants/Colors';

const Button = (props) => {
    return <TouchableOpacity activeOpacity={0.7} style={[styles.button, props.style]} onPress={props.onPress}>
        <LinearGradient start={[0, 0]} end={[1, 0]} style={styles.gradient} colors={[Colors.secondary, Colors.primary]}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </LinearGradient>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 5,
        flex: 1
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    gradient: {
        borderRadius: 30,
        height: 45,
        justifyContent: 'center'
    }
});

export default Button;