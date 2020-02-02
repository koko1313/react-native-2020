import React, {useEffect} from 'react';
import {
    FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {setCountries} from '../redux/actions/counties';

import Layout from '../layout/Layout';
import Card from '../components/Card';

const HomeScreen = () => {

    const countries = useSelector(state => state.countries);

    const dispatch = useDispatch();

    getCountries = async () => {
        
    }

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                const newCountries = response.data.splice(0, 20).map(item=>{
                    return {
                        title: item.name,
                        description: item.description,
                    }
                });
                dispatch(setCountries(newCountries));
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
                data={countries}
                renderItem={renderCard}
                keyExtractor={({_, index})=>'card'+index}
            />
        </Layout>
    )
}

export default HomeScreen