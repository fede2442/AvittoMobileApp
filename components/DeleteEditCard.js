import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import icons from './Images'
import * as Icon from "react-native-feather"
import realm from '../realm/realm';
import store from '../redux/store';
import EditHabitForm from './EditHabitForm';


const DeleteEditCard = ({habit}) => {

    const [habito, setHabito] = useState({});
    const [update, setUpdate] = useState(false); //Maneja el update
    const [activate_habits, setActivateHabit] = useState(true); //Maneja el update
    const [modalOpen, setModalOpen] = useState(false);

    function prueba() {
      console.log("ELIMINANDO: " + habit.name);
      realm.write(() => {
        realm.delete(realm.objects("Habit").filtered(`name == '${habit.name}'`))
      });
      setHabito(null);
      setUpdate(!update);
    }

    //store.subscribe(()=> setUpdate(store.getState().update));
    useEffect(() => {
      if(habito == null){
        setActivateHabit(false)
      }
    }, [update]);


    const setModal = bool => {
      setModalOpen(bool);
    };

    function actualizar() {

      realm.write(() => {

        const habit_to_modify = realm.objects("Habits").filtered(`name == '${habit.name}'`);
        // Update some properties on the instance.
        // These changes are saved to the realm.
        
      });
    }

    return(<>
          <Modal animationType="fade" visible={modalOpen} transparent={true}  onRequestClose={() => {
                      setModalOpen(false);}}>
            <View style={styles.modalView}>
                <Icon.X stroke="black" width={30} height={30} onPress={()=> setModalOpen(false)} />
                <Text style={styles.tituloModal}>Editar Habito</Text>
                <EditHabitForm close={setModal} nombre={habit.name} icono={habit.habitIcon} diasHab={habit.dias}/>
            </View>
          </Modal>
      {activate_habits ?
        <View style={styles.item}>
          <> 
          <View style={{justifyContent:'center'}}>
            {icons(habit.habitIcon)}
          </View>
            <View style={{marginLeft:'5%'}}>
              <Text style={{fontSize: 20, fontWeight: "bold"}}>{habit.name}</Text>
            </View>
            <View style={{flexDirection:'row',padding:0,margin:0}}>
              <TouchableOpacity onPress={() => setModal(true)}  activeOpacity={0.7}>
                <Icon.Edit2 stroke="#EEE5E9" width={30} height={30} strokeWidth={1.2} style={{margin:5}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => prueba()}  activeOpacity={0.7}>
                <Icon.Trash2 stroke="#EEE5E9" width={30} height={30} strokeWidth={1.2} style={{margin:5}}/>
              </TouchableOpacity>
          </View>
          </>
        </View> : <Text>Hola</Text>}</>
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
        textAlign:'center',
        justifyContent:'space-around'
      },
      modalView: {
        margin: 30,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        maxWidth: '80%',
        maxHeight: '90%',
        padding:25,
        },
        tituloModal:{
          fontSize:20,
          marginLeft:'25%',
          marginBottom:10
        },
});

export default DeleteEditCard;