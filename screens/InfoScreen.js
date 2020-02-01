import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import Layout from '../layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from "../redux/actions";
import Colors from '../constants/Colors';
import Button from '../components/Button';

const InfoScreen = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const cards = useSelector(state => state.cards);
    const dispatch = useDispatch();

    const addNewCardItem = () => {
        console.log(cards);

        dispatch({
            type: 'SET_CARDS',
            payload: [...cards, {
                title: title,
                description: description,
            }],
        })
    }

    return (
        <Layout>
            <Text>Enter card details</Text>

            <Text>Card title</Text>
            <TextInput 
                value={title} 
                onChangeText={text => setTitle(text)} // text => setTitle(text) - деклариране на функция на един ред
                style={styles.input}
            />

            <Text>Card description</Text>
            <TextInput 
                value={description} 
                onChangeText={text => setDescription(text)} 
                style={[styles.input, styles.textArea]}
                multiline={true}
                numberOfLines={5}
            />

            <Button onPress={addNewCardItem} title="Add card"></Button>
        </Layout>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.borderLight,
        borderWidth: 3,
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    textArea: {
        height: 150,
        textAlignVertical: 'top',
        paddingVertical: 10, 
    }
});

export default InfoScreen;