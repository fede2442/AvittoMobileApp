import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import Images from './Images'
import * as Icon from "react-native-feather"

const MainButtonHome = ({ navigation }) => {

    return(
        <TouchableOpacity style={styles.frontFloating}  onPress={() => navigation.navigate('Home')} activeOpacity={0.7} >
            <View style={styles.mainButton}>
                <Icon.Home stroke="black" width={50} height={50} strokeWidth={1.2} style={{alignSelf:'center'}}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainButton: {
        alignContent:'center',
        justifyContent:'center',
      },
    frontFloating: {
        position: 'absolute',
        left: '40%',
        top: '85%',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor:'#92DCE5',
        borderRadius: 90/2,
        width: 90,
        height: 90,// TODO: decidir como estilizar el boton
        borderColor: '#7C7C7C',
        borderWidth: 0.2
    },
});

export default MainButtonHome;