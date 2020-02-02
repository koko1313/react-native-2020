import React, {useEffect} from 'react';
import {
    FlatList,
    ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setCountries} from '../redux/actions/counties';
import {setLoading} from '../redux/actions/loading';
import API from '../remote';

import Layout from '../layout/Layout';
import Card from '../components/Card';

const HomeScreen = () => {

    const countries = useSelector(state => state.countries);
    const isLoading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    getCountries = async () => {
        dispatch(setLoading(true));
        const response = await API.get("all")
            .then(response => {
                const newCountries = response.data.splice(0, 20).map(item=>{
                    return {
                        title: item.name,
                        description: item.description,
                        alpha2Code: item.alpha2Code,
                    }
                });
                dispatch(setCountries(newCountries));
            })
            .catch(error => {

            });
        setTimeout(() =>{
            dispatch(setLoading(false));
        },1000);
    }

    useEffect(() => {
        getCountries();
    }, []);

    const renderCard = ({item: card}) => {
        return <Card title={card.title} description={card.description} alpha2Code={card.alpha2Code} />
    }

    return (
        <Layout>
            {isLoading ? <ActivityIndicator /> :
            <FlatList 
                data={countries}
                renderItem={renderCard}
                keyExtractor={({_, index})=>'card'+index}
            />
            }
        </Layout>
    )
}

export default HomeScreen