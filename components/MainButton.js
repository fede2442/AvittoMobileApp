import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import Images from './Images'
import * as Icon from "react-native-feather"

const MainButton = ({ onPress }) => {

    return(
        <TouchableOpacity style={styles.frontFloating} onPress={() => onPress(true)} activeOpacity={0.7} >
            <View style={styles.mainButton}>
                <Icon.Plus stroke="black" width={85} height={80} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainButton: {
        alignContent:'center'
      },
    frontFloating: {
        position: 'absolute',
        left: '40%',
        top: '85%',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor:'green',
        borderRadius: 90/2,
        width: 90,
        height: 90,
        borderColor: 'black',
        borderWidth: 2
    },
});

export default MainButton;