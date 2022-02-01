import React from 'react';
import {StyleSheet, Image, TouchableOpacity, } from 'react-native';
import Images from './Images'

const MainButton = ({ navigation }) => {

    return(
        <TouchableOpacity style={styles.frontFloating} onPress={() => navigation.navigate('Home')} activeOpacity={0.7} >
            <Image source={Images.deadlineIcon} style={{height: 120, width: 120}}/>
        </TouchableOpacity>
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

export default MainButton;