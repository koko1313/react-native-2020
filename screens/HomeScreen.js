import React, {useEffect} from 'react';
import {
    FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

import Layout from '../layout/Layout';
import Card from '../components/Card';

const HomeScreen = () => {

    const cards = useSelector(state => state.cards);

    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                const newCards = response.data.splice(0, 20).map(item=>{
                    return {
                        title: item.name,
                        description: item.description,
                    }
                });
                dispatch({
                    type: 'SET_CARDS',
                    payload: newCards,
                });
            })
            .catch(error => {

            });
            
    }, []);

    const renderCard = ({item: card}) => {
        return <Card title={card.title} description={card.description} />
    }

    return (
        <Layout>
            <FlatList 
                data={cards}
                renderItem={renderCard}
                keyExtractor={({_, index})=>'card'+index}
            />
        </Layout>
    )
}

export default HomeScreen