import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

class Card extends React.Component {

    cards = [
        {
            title: "Card 1",
        }
    ];

    render = () =>
        <View style={styles.card}>
            <Text style={styles.title}>
                {this.props.title}
            </Text>
            <Text style={styles.description}>
                {this.props.description}
            </Text>
            <Button title="View Details"></Button>
        </View>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 4,
        borderColor: '#d1d1d1',
        borderWidth: 1,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        color: '#000000',
        marginBottom: 5,
    },
    description: {
        color: '#666666',
        marginBottom: 15,
    }
});

export default Card