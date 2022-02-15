import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import icons from './Images';
import * as Icon from "react-native-feather";
import realm from '../realm/realm';

const Habit = ({habit}) => {
    
    const [buttonPresses, setButtonPresses] = useState(0);
    
    function sameDay(d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
          d1.getMonth() === d2.getMonth() &&
          d1.getDate() === d2.getDate();
      }

      useEffect(() => {
        sameDay(habit.last_mod,new Date()) && (habito.strikeCount != 0) ? setButtonPresses(buttonPresses + 1) : setButtonPresses(0);
    }, []);

      const habitos = realm.objects("Habit");
      const habito = habitos.filtered("name == '"+habit.name+"'")[0];

    return(
        <Pressable 
                onPress={() => {
                    if(buttonPresses == 0){
                        realm.write(() => {
                            habito.last_mod = new Date();
                            habito.strikeCount = habito.strikeCount + 1;
                            if(habito.strikeCount > habito.strikeHistoricMax){
                                habito.strikeHistoricMax = habito.strikeCount;
                            }
                        }); 
                        setButtonPresses(buttonPresses + 1);
                    }
                    console.log(habito);
                    }}
                onLongPress={() => {
                    if(buttonPresses > 0){
                        var d = new Date();
                        d.setDate(d.getDate()-1);
                        realm.write(() => {
                            habito.last_mod = d; //set yesterdays date
                            habito.strikeCount = habito.strikeCount == 0 ? 0 : habito.strikeCount - 1;
                            habito.strikeHistoricMax = habito.strikeHistoricMax == 0 ? 0 : habito.strikeHistoricMax - 1;
                        });
                        console.log(habito);
                        setButtonPresses(0);
                    }
                }} 
          >
        <View style={[styles.habitCirle, {backgroundColor: buttonPresses > 0 ? 'lightgreen' : '#eee'}]}>
            {icons(habit.habitIcon) }
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
        alignItems: 'center',
        justifyContent:'center'
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