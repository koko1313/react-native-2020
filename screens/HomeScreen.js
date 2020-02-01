import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import Layout from '../layout/Layout';
import Card from '../components/Card';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardItems: [
                {
                    title: "Card 1",
                    description: "Description ....",
                },
                {
                    title: "Card 2",
                    description: "Description 2 ....",
                },
            ],
        }
    }

    renderCards = () => {
        return this.state.cardItems.map((card, index) => {
            return <Card key={index} title={card.title} description={card.description} />
        });
    }

    render = () =>
        <Layout>
            {this.renderCards()}
        </Layout>
}

export default HomeScreen