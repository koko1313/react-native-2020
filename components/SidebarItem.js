import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import Colors from '../constants/Colors';

class SidebarItem extends React.Component {

    menuItemPressed = () => {
        this.props.navigation.navigate(this.props.item.route);
    };

    render = () => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={this.menuItemPressed}
        >
            <View style={styles.iconContainer}>
                {this.props.item.icon}
            </View>
            <Text style={styles.label}>{this.props.item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: Colors.borderLight,
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 16,
        color: Colors.textDark
    },
    activeLabel: {
        color: '#ffffff'
    },
    iconContainer: {
        borderRadius: 50,
        width: 30,
        height: 30,
        marginHorizontal: 10,
        backgroundColor: Colors.iconBackground,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

export default SidebarItem
