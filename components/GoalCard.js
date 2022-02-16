import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import icons from './Images'

const GoalCard = ({habit}) => {

    return(
        <View style={styles.item}>
        <View style={{justifyContent:'center'}}>
          {icons(habit.habitIcon)}
        </View>
          <View style={{marginLeft:'5%'}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>{habit.name}</Text>
            <Text>Racha Actual2: {habit.strikeCount}</Text>
            <Text>Máximo Histórico: {habit.strikeHistoricMax}</Text>
          </View>
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