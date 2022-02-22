import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button, Text, Modal, TouchableOpacity } from 'react-native';
import MainButton from '../components/MainButton';
import BottomMenu from '../components/BottomMenu';
import MainWindow from '../components/MainWindow';
import { NavigationContainer } from '@react-navigation/native';
import Images from '../components/Images';
import Habit from '../components/Habit';
import { useDispatch, useSelector } from 'react-redux';
import contarMas from '../redux/reducers/notesApp';
import * as Icon from "react-native-feather";
import AddHabitForm from '../components/AddHabitForm';
import realm from '../realm/realm';
import dias from '../utils/dias';


const Home = ({ navigation }) => {


  const [modalOpen, setModalOpen] = useState(false);
  
  
  //const habits = useSelector(state => state);
  //const dispatch = useDispatch();
  //const contar_mas = () => dispatch(contarMas());

  const setModal = bool => {
      setModalOpen(bool);
  };

  
  var actual_day = new Date()
  const dia_num = actual_day.getDay() === 0 ? 6 : actual_day.getDay()-1; //1er dia de la semana en java es domingo
  const dia_str = dias[dia_num];

  const habitos = realm.objects("Habit").filtered(`dias["${dia_str}"] == true`);

  return (
    <NavigationContainer>

      <Modal animationType="fade" visible={modalOpen} transparent={true}  onRequestClose={() => {
                      setModalOpen(false);}}>
          <View style={styles.modalView}>
              <Icon.X stroke="black" width={30} height={30} onPress={()=> setModalOpen(false)} />
              <Text style={styles.tituloModal}>Agregar Hábito</Text>
              <AddHabitForm close={setModal}/>
          </View>
      </Modal>
      
      <View style={styles.container}>
        <MainWindow>
          <FlatList 
                      data={habitos}
                      numColumns={3}
                      renderItem={({item}) => ( 
                        <Habit habit={item}/>
                      )}
                      style={{padding:10}}
                      />
        </MainWindow>
        <BottomMenu navigation={navigation} />
        <MainButton navigation={navigation} onPress={setModal}/>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',  
    padding: 10,
    backgroundColor:'#343635'
  },
  text: {
    fontSize: 20,
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
      }
});

export default Home;