import React, { useState } from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import Images from './Images';

const Habit = ({habit}) => {
    
    const [buttonPresses, setButtonPresses] = useState(0);

    return(
        <Pressable 
                onPress={() => {
                    setButtonPresses(buttonPresses + 1);
                    console.log(buttonPresses);}}
                onLongPress={() => {
                    setButtonPresses(0);
                    console.log("Volvemos al inicio")
                }} 
          >
        <View style={[styles.habitCirle, {backgroundColor: buttonPresses > 0 ? 'lightgreen' : '#eee'}]}>
            <Image source={habit.habitIcon} style={styles.habitIcon} resizeMode='contain'/>
        </View>
        <Text style={styles.habitDesc}>{habit.name}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    habitIcon: {
        flex: 1,
        width: '75%',
        alignSelf: 'center',
    },
    habitCirle: {
        flex: 2,
        marginTop: 30,
        height: 100,
        width: 100,
        borderRadius: 75,
        marginHorizontal: 7,
        borderWidth: 1,
        overflow: 'hidden',
    },
    habitDesc: {
        backgroundColor:'#eeee', 
        flex: 1, 
        padding: 3,
        alignContent: 'center',
        marginTop: 2, 
        alignSelf:'center',
        borderRadius: 10,
    }
});


export default Habit;