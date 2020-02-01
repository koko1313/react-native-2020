import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import colors from '../constants/Colors';
import Constants from 'expo-constants';

class Header extends React.Component {

    toggleSidebar = () => {
        this.props.navigation.toggleDrawer();
    };
    render = () =>
        <View style={styles.header}>
            <View style={styles.left}>
                <TouchableOpacity onPress={this.toggleSidebar}>
                    <FontAwesome name="bars" size={32} color={'#ffffff'}/>
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>Header</Text>
            </View>
            <View style={styles.right}>

            </View>
        </View>
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.headerBackground,
    },
    left: {
        width: 32
    },
    center: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: '#ffffff',
        fontSize: 16,
    },
    right: {
        width: 32
    },
});

export default withNavigation(Header);