import 'react-native-gesture-handler';
import React , { useState, useEffect }from 'react';
import {View, StyleSheet, Text, FlatList, ImageBackground, Pressable, Modal, Button} from 'react-native';
import MainButtonHome from '../components/MainButtonHome';
import BottomMenu from '../components/BottomMenu';
import MainWindow from '../components/MainWindow';
import { NavigationContainer } from '@react-navigation/native';
import Images from '../components/Images';
import { useDispatch, useSelector } from 'react-redux';
import { quitar_habito_action } from '../redux/reducers/notesApp';
import realm from '../realm/realm';
import store from '../redux/store';
import DeleteEditCard from '../components/DeleteEditCard';

const ManageHabits = ({ navigation }) => {

  const [habits, setHabitos] = useState([]);  
  const [modalOpen, setModalOpen] = useState(false);
  const [habitToDelete, setHabit] = useState("0");
  const [lifestyleList, setLifestyle] = useState([]);

  useEffect(() => {
    setHabitos(realm.objects("Habit"));
  }, []);

  useEffect(() => {
    fetch('http://192.168.67.13:3000/hola')
    .then((response) => response.json())
    .then(data => setLifestyle(data)).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
    });
    console.log(lifestyleList)
  }, []);

  return (
      <NavigationContainer>
        <Modal animationType="fade" visible={modalOpen} transparent={true}  onRequestClose={() => {
                      setModalOpen(false);}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>¿Estas seguro de eliminar el hábito?</Text>
              <View style={styles.modalButtonView}>
              <View style={styles.modalButton}>
              <Button title={"Cancelar"} onPress={() => {setModalOpen(false)}}/>
              </View>
              <View style={styles.modalButton}>
              <Button title={"Si, Eliminar"} onPress={() => {quitar_habito( habitToDelete); setModalOpen(false);}}/>
              </View></View>
          </View>
        </View> 
        </Modal>

        <View style={styles.container}>
        <MainWindow backgroundImage={Images.rickBackground2i}>
          <Text style={styles.flap}>Your Habits</Text>
            <FlatList 
                      data={habits}
                      numColumns={1}
                      style={{marginBottom:10}}
                      renderItem={({item}) => ( 
                        <Pressable 
                        onPress={() => {
                            console.log("Sacado item: ", item);}}
                        onLongPress={() => {
                           //quitar_habito( item.key);
                            setHabit(item.key);
                            setModalOpen(true);
                        }} 
                        >
                        <Text adjustsFontSizeToFit style={styles.text}>{item.name}</Text>
                        <DeleteEditCard habit={item}/>
                        </Pressable>
                      )}
            />
            <Text style={styles.flap}>Add a LifeStyle</Text>
            <FlatList 
                      data={lifestyleList}
                      numColumns={1}
                      keyExtractor={(item, index) => item.name.toString()}
                      renderItem={({item}) => ( 
                        <Pressable 
                        onPress={() => {
                          const nombres = habits.map((habito) => habito.name);
                          
                          let no_agregados = "";
                          for(const habit of item.habitos){
                            if(nombres.indexOf(habit.name) >= 0){
                              no_agregados = no_agregados + habit.name + ", "; 
                            }else{
                              realm.write(() => {
                              realm.create("Habit", {
                                  name: habit.name,
                                  last_mod: new Date(),
                                  strikeCount: 0,
                                  strikeHistoricMax: 0,
                                  habitIcon: habit.habitIcon,
                                  dias: habit.dias
                                }, );
                              });
                            }                              
                          }
                          if(no_agregados != ""){
                              alert("Lifestyle agregado, los siguientes hábitos ya existian: " + no_agregados.substring(0,no_agregados.length - 2));
                            }else{
                              alert("Lifestyle '" + item.name + "' agregado correctamente!" )
                           }
                          store.dispatch({ type: 'UPDATE'}); //Updeteo con redux el home para que aparezcan los habitos
                        }}
                        onLongPress={() => {
                            console.log("Agregar lifestyle: ", item);
                        }} 
                        >
                        <View style={styles.item}>
                        <View style={{flexDirection:'row'}}>
                          <Text adjustsFontSizeToFit style={[styles.text, {width:'45%'}]}>{item.name}</Text>
                            <FlatList
                              data={item.habitos}
                              style = {{flexDirection: 'column', width:'55%', flexWrap:'wrap'}}
                              renderItem={({item}) => <Text key={item.name} style={{marginBottom:2}}>- {item.name}</Text>}
                              keyExtractor={item => item.name}
                            />
                        </View>
                        </View>
                        </Pressable>
                      )}
            />
        </MainWindow>
        <BottomMenu navigation={navigation} habits={habits}/>
        <MainButtonHome navigation={navigation}/>
      </View>
    </NavigationContainer>
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ddd',
    flexDirection: 'column', 
    alignItems: 'stretch',  
    padding: 10,
    backgroundColor:'#343635'
  },
  text: {
    paddingLeft: 20,
    width: '100%',
    fontWeight: 'bold',
    },
    modalText: {
      padding: 20,
      width: '100%',
      fontWeight: 'bold',
    },
  flap: {
    padding: 30, 
    backgroundColor: '#1899A0', 
    marginTop: 20,
    marginBottom: 10, 
    width: '50%', 
    borderTopRightRadius: 40, 
    borderBottomRightRadius: 40,
    color: '#fff',
    fontWeight: 'bold'

  },
  formContainer: {
    alignSelf: 'flex-start',
    marginTop: 10,
    width: '101%',
    opacity: 0.8,
    marginLeft: -1,
    backgroundColor: 'lightblue',
    marginHorizontal: 7,
    borderWidth: 1,
  },
  titleText:{
    fontSize: 30,
    borderWidth: 2,
    textAlign: 'center',
    marginHorizontal: 10,
    backgroundColor: 'lightblue',
    marginTop: 20,
    opacity: 0.8,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 30,
    height: 150,
    width: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    justifyContent: 'center',
  },
  modalButtonView:{
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 40,
  },
  modalButton: {
    marginHorizontal: 10,
    marginTop: 10,
    marginLeft: 10,
  }

});

export default ManageHabits;