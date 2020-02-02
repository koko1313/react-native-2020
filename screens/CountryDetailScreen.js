import React, {useState, useEffect} from 'react';
import {ScrollView, Text, ActivityIndicator, Alert} from 'react-native';
import Layout from '../layout/Layout';
import API from '../remote';

const CountryDetails = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState({
        hasError: false,
        message: null,
    });
    const alpha2Code = props.navigation.getParam('alpha2Code');

    useEffect(() => {
        API.get(`alpha1/${alpha2Code}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                // Alert.alert('Error', 'Error occurred!');
                setError({
                    hasError: true,
                    message: 'Error occurred!',
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <Layout>
            {isLoading && <ActivityIndicator />}
            {!isLoading &&
                <ScrollView>
                    <Text>{data.name}</Text>
                    <Text>{data.capital}</Text>
                </ScrollView>
            }
        </Layout>
    );

}

export default CountryDetails;