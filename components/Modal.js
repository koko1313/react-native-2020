import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';

export default function ModalBox(props) {
    return <Modal visible={props.visible} transparent={true}>
        <View style={styles.overlay}>
            <View style={styles.modalContent}>
                {props.children}
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 6,
        marginHorizontal: 30,
        elevation: 3
    },
});