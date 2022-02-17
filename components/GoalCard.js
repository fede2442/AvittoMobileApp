import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import icons from './Images'
import * as Icon from "react-native-feather"
import realm from '../realm/realm';

const GoalCard = ({habit}) => {

  
  var d = habit.last_mod;

    d.setDate(d.getDate()+2);

    const habitos = realm.objects("Habit");
    const habito = habitos.filtered("name == '"+habit.name+"'")[0];

    if(d <= new Date()){   
        realm.write(() => {
          habito.last_mod =  new Date(); //set yesterdays date
          habito.strikeCount = 0;
      });
    }    

    return(
        <View style={styles.item}>
        <View style={{justifyContent:'center'}}>
          {icons(habit.habitIcon)}
        </View>
          <View style={{marginLeft:'5%'}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>{habit.name}</Text>
            <Text>Racha Actual: {habit.strikeCount}</Text>
            <Text>Máximo Histórico: {habit.strikeHistoricMax}</Text>
          </View>
          {(habit.strikeCount === habit.strikeHistoricMax) && (habit.strikeHistoricMax != 0) ? 
          <Icon.ChevronsUp stroke="#2ECC71" width={50} height={50} strokeWidth={1.2} style={{alignSelf:'center', marginLeft:'25%'}}/>
          : <Text></Text>
          }
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        backgroundColor:'white',
        padding: 5,
        borderRadius: 50,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 10,
        margin: 10,
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

export default GoalCard;