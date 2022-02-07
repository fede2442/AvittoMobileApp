import React , { useState }from 'react';
import {StyleSheet, Modal, Text } from 'react-native';

const ConfirmDeleteHabit = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return(
        <Modal visible={false}>
        </Modal>
    );
};

const styles = StyleSheet.create({
    mainButton: {
        borderRadius: 100/2,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignContent: 'center',
      },
    frontFloating: {
        position: 'absolute',
        left: '36%', 
        top: '82%',
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default ConfirmDeleteHabit;