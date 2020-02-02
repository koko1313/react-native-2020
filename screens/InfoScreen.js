import React, {useState} from 'react';
import {Text, TextInput, StyleSheet, View, Picker, ScrollView} from 'react-native';
import Layout from '../layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import { setCountries } from '../redux/actions/counties';

const InfoScreen = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [direction, setDirection] = useState('append');

    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();

    const addNewCountryItem = () => {
        const newItem = {
            title,
            description,
            alpha2Code: 'bg',
        };

        const newCountries = 
            direction === 'append' 
                ? [...countries, newItem] 
                : [newItem, ...countries];
        
        setTitle('');
        setDescription('');
            
        dispatch(setCountries(newCountries));
    }

    return (
        <Layout>
            <ScrollView>
                <View style={styles.infoContainer}>
                    <Text>Enter country title:</Text>
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
                    <Picker selectedValue={direction} onValueChange={value => setDirection(value)} style={styles.picker}>
                        <Picker.Item label="Prepend" value="prepend" />
                        <Picker.Item label="Append" value="append" />
                    </Picker>
                    <Button onPress={addNewCountryItem} title="Add card" />
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
    },
    picker: {
        borderColor: '#333',
        borderWidth: 1
    }
});

export default InfoScreen;