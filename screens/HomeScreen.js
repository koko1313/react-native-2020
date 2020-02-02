import React, {useEffect, useState} from 'react';
import {
    FlatList,
    ActivityIndicator,
    Modal,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setCountries, deleteCountry} from '../redux/actions/counties';
import {setLoading} from '../redux/actions/loading';
import API from '../remote';

import Layout from '../layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import ButtonOutlined from '../components/ButtonOutlined';
import ModalBox from '../components/Modal';

const HomeScreen = () => {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [selectedCountryForDelete, setCountryForDelete] = useState(null);
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

    function handleDelete(item) {
        setModalIsVisible(true);
        setCountryForDelete(item);
    }

    function deleteCard() {
        if(selectedCountryForDelete){
            dispatch(deleteCountry(selectedCountryForDelete));
            setModalIsVisible(false);
        }
    }

    const renderCard = ({item: card}) => {
        return <Card title={card.title} description={card.description} alpha2Code={card.alpha2Code} onDeletePressed={() => {handleDelete(card)}} />
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
            <ModalBox visible={modalIsVisible}>
                <Text style={styles.modalTitle}>Are you sure?</Text>
                <View style={styles.row}>
                    <Button onPress={deleteCard} title="Yes"></Button>
                    <ButtonOutlined onPress={() => setModalIsVisible(false)} title="No"></ButtonOutlined>
                </View>
            </ModalBox>
        </Layout>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    modalTitle: {
        fontSize: 18,
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
    },
});