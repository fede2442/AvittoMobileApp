import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const BottomMenu = ({ navigation , habits}) => {
        
    return(
        <View style={styles.menuBar}>
            <TouchableOpacity onPress={() => navigation.navigate('ManageHabits', { habits: habits })}  activeOpacity={0.7}>
            <Image source={require('../Icons/planning.png')} style={styles.sideIcons}/>
            </TouchableOpacity>
            <Text style={styles.Invisibletext}/>
            <TouchableOpacity onPress={() => navigation.navigate('Goals', { habits: habits }) } activeOpacity={0.7}>
            <Image source={require('../Icons/task.png')} style={styles.sideIcons}/>
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