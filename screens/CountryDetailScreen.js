import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View, ActivityIndicator, Alert, Image, StyleSheet} from 'react-native';
import Layout from '../layout/Layout';
import API from '../remote';
import ErrorLabel from '../components/ErrorLabel';

const CountryDetails = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState({
        hasError: false,
        message: null,
    });
    const alpha2Code = props.navigation.getParam('alpha2Code');

    useEffect(() => {
        API.get(`alpha/${alpha2Code}`)
            .then(response => {
                setData(response.data);
                setError({
                    hasError: false,
                });
            })
            .catch(error => {
                // Alert.alert('Error', 'Error occurred!');
                setError({
                    hasError: true,
                    message: error.toString(),
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [alpha2Code]);

    return (
        <Layout>
            {isLoading && <ActivityIndicator />}
            {!isLoading &&
                <ScrollView>
                    <View style={styles.heading}>
                        <View>
                            <Text style={styles.heading}>{data.name}</Text>
                            <Text>{data.capital}</Text>
                        </View>
                        <Image source={{uri: `https://www.countryflags.io/${data.alpha2Code}/flat/64.png`}} style={styles.flag} />
                    </View>
                </ScrollView>
            }
            {error.hasError && 
                <ErrorLabel title="Error" description={error.message} />
            }
        </Layout>
    );

}

export default CountryDetails;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 32,
    },
    flag: {
        width: 64,
        height: 64,
    },
});