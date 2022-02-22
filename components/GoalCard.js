import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import icons from './Images'
import * as Icon from "react-native-feather"
import realm from '../realm/realm';
import dias from '../utils/dias';
import sameDay from '../utils/sameDay';

const GoalCard = ({habit}) => {

    var dict = habit.dias; 
    var dias_habiles = [];
    for(var key in dict) { //["lunes","martes","miercoles"]
      var value = dict[key];
      if(dict[key]){
        dias_habiles.push(key);
      }
    }

    var now = new Date();
    var cont_dias_habiles = 0;
    var habit_last_mod = habit.last_mod;
    habit_last_mod.setDate(habit_last_mod.getDate()+1)

    //Cuento desde la ultima vez presionado el habito contando solo los dias habiles del mismo
    //Lun, Mie, Sab = cuento solo estos dias
    for (var d = habit.last_mod; !sameDay(d,now) ; d.setDate(d.getDate() + 1)) {
      const dia_num = d.getDay() === 0 ? 6 : d.getDay()-1; //1er dia de la semana en java es domingo
      if(dias_habiles.indexOf(dias[dia_num]) >= 0){
        cont_dias_habiles++;
      }
    }

    const habitos = realm.objects("Habit");
    const habito = habitos.filtered("name == '"+habit.name+"'")[0];

    //Si paso mas de un dia del habito sin marcarlo se resetea la racha
    if(cont_dias_habiles > 1){ 
        var dia_anterior = new Date();
        dia_anterior.setDate(dia_anterior.getDate()-1);
        realm.write(() => {
          habito.last_mod =  dia_anterior; //set yesterdays date
          habito.strikeCount = 0;
      });
      console.log("HAIBTO: " + habit.name + "PERDIO LA RACHA")
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