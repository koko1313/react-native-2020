import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

function ButtonOutlined(props) {

    return (
        <TouchableOpacity 
            onPress={props.onPress}
            activeOpacity={.7}
            style={[styles.button, props.style]}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        marginHorizontal: 5,
        flex: 1,
        borderRadius: 30,
        height: 45,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Colors.danger
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.danger,
        textAlign: 'center'
    }
});
export default ButtonOutlined;