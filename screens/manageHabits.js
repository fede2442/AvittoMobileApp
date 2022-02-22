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

const ManageHabits = ({ navigation }) => {

  const habits = useSelector(state => state);

  const dispatch = useDispatch();
  const quitar_habito = (id) => dispatch(quitar_habito_action(id));
  
  const [modalOpen, setModalOpen] = useState(false);
  const [habitToDelete, setHabit] = useState("0");
  const [lifestyleList, setLifestyle] = useState([]);


  useEffect(() => {
    fetch('http://192.168.0.61:3000/hola')
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
                      data={habits.habitos}
                      numColumns={2}
                      renderItem={({item}) => ( 
                        <Pressable 
                        onPress={() => {
                            console.log("Sacado item: ", item);}}
                        onLongPress={() => {
                           //quitar_habito( item.key);
                            setHabit(item.key);
                            setModalOpen(true);
                            console.log("agregado item: ", item);
                        }} 
                        >
                        <Text adjustsFontSizeToFit style={styles.text}>{item.name}</Text>
                        </Pressable>
                      )}
            />
            <Text style={styles.flap}>Add a LifeStyle</Text>
            <FlatList 
                      data={lifestyleList}
                      numColumns={1}
                      renderItem={({item}) => ( 
                        <Pressable 
                        onPress={() => {
                            console.log("Tocado lifestyle: ", item);}}
                        onLongPress={() => {
                            console.log("Agregar lifestyle: ", item);
                        }} 
                        >
                        <View style={styles.item}>
                        <View style={{justifyContent:'center'}}>
                          <Text adjustsFontSizeToFit style={styles.text}>{item.name}</Text>
                          <Text>{item.habitos[0].name}</Text>
                          <View style={{marginLeft:'5%'}}>
                            {console.log("asdasdasda: " + item.habitos[0])}
                            <FlatList
                              data={item.habitos}
                              numColumns={2}
                              renderItem={({habito2})=>  
                                  <View>
                                    <Text>{habito2?.name}</Text>
                                    {console.log("no entiendo: " + habito2)}
                                </View>}
                              keyExtractor={(habito2) => habito2.name}
                            />
                        </View>
                         
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
    padding: 20,
    width: '100%',
    fontWeight: 'bold'
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