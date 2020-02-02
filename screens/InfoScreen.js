import React, {useState} from 'react';
import {Text, TextInput, StyleSheet, View, ScrollView} from 'react-native';
import Layout from '../layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
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
            <ScrollView>
                <View style={styles.infoContainer}>
                    <Text>Enter card title:</Text>
                    <TextInput
                        value={title}
                        onChangeText={text=>setTitle(text)}
                        style={styles.input}
                    />
                    <Text>Enter card description:</Text>
                    <TextInput
                        value={description}
                        numberOfLines={5}
                        multiline={true}
                        onChangeText={text=>setDescription(text)}
                        style={[styles.input, styles.textArea]}
                    />
                    <Button onPress={addNewCardItem} title="Add card" />
                </View>
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        padding: 15,
        backgroundColor: "#ffffff",
    },
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