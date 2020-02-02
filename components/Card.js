import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Button from './Button';
import ButtonOutlined from './ButtonOutlined';

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
            <View style={styles.cardFooter}>
                <Button title="View Details"></Button>
                <ButtonOutlined title="Delete Card"></ButtonOutlined>
            </View>
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
        fontSize: 20,
        color: '#000000',
        marginBottom: 5,
    },
    description: {
        color: '#666666',
        paddingVertical: 15,
    },
    cardFooter: {
        flexDirection: "row"
    }
});

export default Card