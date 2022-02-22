import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, Modal } from 'react-native';
import MainButton from '../components/MainButton';
import BottomMenu from '../components/BottomMenu';
import MainWindow from '../components/MainWindow';
import { NavigationContainer } from '@react-navigation/native';
import Habit from '../components/Habit';
import * as Icon from "react-native-feather";
import AddHabitForm from '../components/AddHabitForm';
import realm from '../realm/realm';
import dias from '../utils/dias';
import { TouchableOpacity } from 'react-native-gesture-handler';
import store from '../redux/store';


const Home = ({ navigation }) => {


  const [modalOpen, setModalOpen] = useState(false);
  const [habitos, setHabitos] = useState([]);
  const [update, setUpdate] = useState(false); //Maneja el update del home

  store.subscribe(()=>
      setUpdate(store.getState().update)
  )

  const setModal = bool => {
      setModalOpen(bool);
  };

  var actual_day = new Date()
  const dia_num = actual_day.getDay() === 0 ? 6 : actual_day.getDay()-1; //1er dia de la semana en java es domingo
  const dia_str = dias[dia_num];

  useEffect(() => {
    setHabitos(realm.objects("Habit").filtered(`dias["${dia_str}"] == true`));
  }, [update]);

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
      <Text style={styles.textoTop}>{dia_str.charAt(0).toUpperCase() + dia_str.slice(1)}, {actual_day.toLocaleDateString()}</Text>
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
        <MainButton navigation={navigation} onPress={setModalOpen}/>
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
      },
      textoTop:{
       alignSelf:'center',
       fontFamily: 'notoserif',
       fontSize: 25,
       fontWeight: 'bold',
       color:'#EEE5E9' 
      

      }
});

export default Home;