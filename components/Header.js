import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import * as Icon from "react-native-feather"

const Header = ({ navigation }) => {

    var actual_day = new Date()
    const dia_num = actual_day.getDay() === 0 ? 6 : actual_day.getDay()-1; //1er dia de la semana en java es domingo
    const dia_str = dias[dia_num];
    
    return(
        <View style={{flexDirection:'row-reverse'}}>
        <TouchableOpacity  onPress={() => navigation.navigate('EditDelete')} activeOpacity={0.7} >
            <Icon.Edit2 stroke="#EEE5E9" width={30} height={30} strokeWidth={1.2} style={{margin:5,marginLeft:45}}/>
        </TouchableOpacity>
        <Text style={styles.textoTop}>{dia_str.charAt(0).toUpperCase() + dia_str.slice(1)}, {actual_day.toLocaleDateString()}</Text>
        </View>  
    );
};

const styles = StyleSheet.create({
    textoTop:{
        alignSelf:'center',
        fontFamily: 'notoserif',
        fontSize: 25,
        fontWeight: 'bold',
        color:'#EEE5E9',
        marginRight:5,
       }
});

export default Header;