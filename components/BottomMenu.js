import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Icon from "react-native-feather"

const BottomMenu = ({ navigation , habits}) => {
        
    return(
        <View style={styles.menuBar}>
            <TouchableOpacity onPress={() => navigation.navigate('ManageHabits')}  activeOpacity={0.7}>
              <Icon.Settings stroke="black" width={60} height={60} strokeWidth={1.2}/>
            </TouchableOpacity>
            <Text style={styles.Invisibletext}/>
            <TouchableOpacity onPress={() => navigation.navigate('Goals') } activeOpacity={0.7}>
              <View style={{backgroundColor:'red', borderWidth:5,borderRadius:10}}>
              <Icon.Award  color="white" stroke="black" width={60} height={60} strokeWidth={1.2}/>
              </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuBar: {
        flex: 2,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row', 
        paddingBottom: 15,
        backgroundColor:'#343635'
      },
      Invisibletext: {
        opacity: 0,
      },
      text: {
        fontSize: 20,
      },
      sideIcons: {
        height: 68,
        width: 68,
      }
});


export default BottomMenu;