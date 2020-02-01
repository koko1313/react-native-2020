import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import colors from '../constants/Colors';
import {LinearGradient} from 'expo-linear-gradient';

export default class Container extends React.Component {

    render = () =>
        <View style={styles.container}>
            <LinearGradient style={styles.gradient} colors={[colors.background.light, colors.background.dark]}/>
            {this.props.children}
        </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});