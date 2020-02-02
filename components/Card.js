import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Button from './Button';
import ButtonOutlined from './ButtonOutlined';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.openDetails = this.openDetails.bind(this);
    }

    openDetails() {
        this.props.navigation.navigate('CountryDetail', {
            alpha2Code: this.props.alpha2Code
        });
    }

    render = () =>
        <View style={styles.card}>
            <Text style={styles.title}>
                {this.props.title}
            </Text>
            <Text style={styles.description}>
                {this.props.description}
            </Text>
            <View style={styles.cardFooter}>
                <Button onPress={this.openDetails} title="View Details"></Button>
                <ButtonOutlined onPress={this.props.onDeletePressed} title="Delete Card"></ButtonOutlined>
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

export default withNavigation(Card)