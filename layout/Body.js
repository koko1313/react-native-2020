import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

export default class Body extends React.Component {
    render = () =>
        <View style={styles.content}>
            {this.props.children}
        </View>
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 15
    }
});