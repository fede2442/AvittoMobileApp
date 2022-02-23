import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Icon from "react-native-feather"

const BottomMenu = ({ navigation }) => {
        
    return(
        <View style={styles.menuBar}>
            <TouchableOpacity onPress={() => navigation.navigate('ManageHabits')}  activeOpacity={0.7}>
              <View style={styles.shadow}>
              <Icon.Download stroke="black" width={55} height={55} strokeWidth={1}/>
              </View>
            </TouchableOpacity>
            <Text style={styles.Invisibletext}/>
            <TouchableOpacity onPress={() => navigation.navigate('Goals') } activeOpacity={0.7}>
              <View style={styles.shadow}>
              <Icon.Award  stroke="black" width={60} height={60} strokeWidth={1}/>
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
      shadow: {
        backgroundColor:'white', 
        borderRadius: 45,
        height:70,
        width: 70,
        alignItems:'center',
        justifyContent: 'center',
        marginTop:10,
        borderWidth:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 5,
      }
});


export default BottomMenu;