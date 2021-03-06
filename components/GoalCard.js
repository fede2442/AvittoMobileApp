import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import icons from './Images'
import * as Icon from "react-native-feather"
import realm from '../realm/realm';
import dias from '../utils/dias';
import sameDay from '../utils/sameDay';

const GoalCard = ({habit}) => {

    let dict = habit.dias;
    let dias_habiles = [];
    for(let key in dict) { //["lunes","martes","miercoles"]
      let value = dict[key];
      if(dict[key]){
        dias_habiles.push(key);
      }
    }

    let now = new Date();
    let cont_dias_habiles = 0;
    let habit_last_mod = habit.last_mod;
    habit_last_mod.setDate(habit_last_mod.getDate()+1)

    //Cuento desde la ultima vez presionado el habito contando solo los dias habiles del mismo
    //Lun, Mie, Sab = cuento solo estos dias
    for (let d = habit.last_mod; !sameDay(d,now) ; d.setDate(d.getDate() + 1)) {
      const dia_num = d.getDay() === 0 ? 6 : d.getDay()-1; //1er dia de la semana en java es domingo
      if(dias_habiles.indexOf(dias[dia_num]) >= 0){
        cont_dias_habiles++;
      }
    }

    const habitos = realm.objects("Habit");
    const habito = habitos.filtered("name == '"+habit.name+"'")[0];

    //Si paso mas de un dia del habito sin marcarlo se resetea la racha
    if(cont_dias_habiles > 1){ 
        let dia_anterior = new Date();
        dia_anterior.setDate(dia_anterior.getDate()-1);
        realm.write(() => {
          habito.last_mod =  dia_anterior; //set yesterdays date
          habito.strikeCount = 0;
      });
      console.log("HAIBTO: " + habit.name + "PERDIO LA RACHA")
    }    

    return(
        <View style={styles.item}>
        <View style={{justifyContent:'center',marginLeft: 5, minHeight:40, minWidth:40}}>
          {icons(habit.habitIcon) == false  ? 
                                            <Icon.X stroke='black' width={30} height={30} strokeWidth={1.2} style={{alignSelf:'center'}}/> 
                                            : icons(habit.habitIcon)}
        </View>
          <View style={{marginLeft:15, flexShrink:0.5,  width:'60%'}}>
            <Text style={{fontSize: 20, fontWeight: "bold", flexShrink:0.5}}>{habit.name}</Text>
            <Text>Racha Actual: {habit.strikeCount}</Text>
            <Text>M??ximo Hist??rico: {habit.strikeHistoricMax}</Text>
          </View>
          <View style={{justifyContent:'flex-end',alignContent:'flex-end'}}>
          {(habit.strikeCount === habit.strikeHistoricMax) && (habit.strikeHistoricMax != 0) ? 
          <Icon.ChevronsUp stroke="#2ECC71" width={60} height={60} strokeWidth={1.2} style={{flex:1}}/>
          : <Text></Text>
          }
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