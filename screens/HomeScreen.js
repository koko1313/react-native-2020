import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import {useSelector} from 'react-redux';

import Layout from '../layout/Layout';
import Card from '../components/Card';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {

    const cards = useSelector(state => state.cards);

    const renderCards = () => {
        return cards.map((card, index) => {
            return <Card key={index} title={card.title} description={card.description} />
        });
    }

    return (
        <Layout>
            <ScrollView>
            {renderCards()}
            </ScrollView>
        </Layout>
    )
}

export default HomeScreen