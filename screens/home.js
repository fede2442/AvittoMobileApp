import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Animated, Text, Modal, PanResponder } from 'react-native';
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
import Header from '../components/Header'

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

  let pan = new Animated.ValueXY();
  let _val = { x:0,y:0};
  pan.addListener((value) => _val = value);
  let panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderRelease: (e,gesture) => {
          if(Math.abs(gesture.dx) > Math.abs(gesture.dy)){
            if(Math.abs(gesture.dx) > 50){
              if(gesture.dx > 0 ){
                navigation.navigate('ManageHabits')
              }else{
                navigation.navigate('Goals')
              }
            } 
          }else{
            if(Math.abs(gesture.dy) > 50){
              if(gesture.dy > 0 ){
                navigation.navigate('EditDelete')
              }
            }
          }
      }
  });


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
        <Header navigation={navigation}/>
        <MainWindow>
          <Animated.View style= {{flex:1}}{...panResponder.panHandlers}>

          <FlatList 
                      data={habitos}
                      numColumns={3}
                      keyExtractor={(item) => "home" + item.name}
                      renderItem={({item}) => ( 
                        <Habit habit={item}/>
                      )}
                      style={{padding:10}}
                      />
          </Animated.View>

        </MainWindow>
        <BottomMenu navigation={navigation} />
        <MainButton onPress={setModalOpen}/>
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

});

export default Home;