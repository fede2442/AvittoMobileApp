import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import icons from './Images'
import * as Icon from "react-native-feather"
import realm from '../realm/realm';
import store from '../redux/store';
import EditHabitForm from './EditHabitForm';


const DeleteEditCard = ({habit, deleteFunc}) => {

    const [habito, setHabito] = useState({});
    const [update, setUpdate] = useState(false); //Maneja el update
    const [modalOpen, setModalOpen] = useState(false);

    const animatedX  = new Animated.Value(0);
    const animatedHeight = new Animated.Value(65);


    const windowWidth = Dimensions.get('window').width;

    const slideDissappear = () => {
      Animated.sequence([
          Animated.timing(animatedX, {
              toValue: windowWidth,
              duration: 500,
              useNativeDriver: false,
          }),
          Animated.timing(animatedHeight, {
              toValue:0,
              duration: 200,
              useNativeDriver: false,
          })
          ]).start(() => deleteFunc(habit));
    }

    const setModal = bool => {
      setModalOpen(bool);
    };

    return(<>
          <Modal animationType="fade" visible={modalOpen} transparent={true}  onRequestClose={() => {
                      setModalOpen(false);}}>
            <View style={styles.modalView}>
                <Icon.X stroke="black" width={30} height={30} onPress={()=> setModalOpen(false)} />
                <Text style={styles.tituloModal}>Editar Habito</Text>
                <EditHabitForm close={setModal} nombre={habit.name} icono={habit.habitIcon} diasHab={habit.dias} />
            </View>
          </Modal>
      {true ?
        <Animated.View style={[styles.item,{ position:'relative', right:animatedX, height:animatedHeight }]}>
          <> 
          <View style={{justifyContent:'center', marginLeft:10}}>
            {icons(habit.habitIcon)}
          </View>
            <View style={{marginLeft:'5%'}}>
              <Text style={{fontSize: 20, fontWeight: "bold", marginLeft:10}}>{habit.name}</Text>
            </View>
            <View style={{flexDirection:'row',padding:0,margin:0,justifyContent:'flex-end',flex:1}}>
              <TouchableOpacity onPress={() => setModal(true)}  activeOpacity={0.7}>
                <Icon.Edit2 stroke="#EEE5E9" width={30} height={30} strokeWidth={1.2} style={{margin:5}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => slideDissappear()}  activeOpacity={0.7}>
                <Icon.Trash2 stroke="#EEE5E9" width={30} height={30} strokeWidth={1.2} style={{margin:5}}/>
              </TouchableOpacity>
          </View>
          </>
        </Animated.View> : <Text>Hola</Text>}</>
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
        alignItems:'center',
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