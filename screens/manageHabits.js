import 'react-native-gesture-handler';
import React , { useState }from 'react';
import {View, StyleSheet, Text, FlatList, ImageBackground, Pressable, Modal, Button} from 'react-native';
import MainButtonHome from '../components/MainButtonHome';
import BottomMenu from '../components/BottomMenu';
import MainWindow from '../components/MainWindow';
import { NavigationContainer } from '@react-navigation/native';
import Images from '../components/Images';
import { useDispatch, useSelector } from 'react-redux';
import { quitar_habito_action } from '../redux/reducers/notesApp';
import { MaterialIcons } from 'react-native-vector-icons';

const ManageHabits = ({ navigation }) => {

  const habits = useSelector(state => state);

  const dispatch = useDispatch();
  const quitar_habito = (id) => dispatch(quitar_habito_action(id));
  
  const [modalOpen, setModalOpen] = useState(false);
  const [habitToDelete, setHabit] = useState("0");

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
                      numColumns={1}
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
            <Text style={styles.flap}>Add a new habit</Text>
        </MainWindow>
        <BottomMenu navigation={navigation} habits={habits}/>
        <MainButtonHome navigation={navigation}/>
      </View>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
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
    backgroundColor: '#292B8B', 
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
  habitIcon: {
    width: '75%',
    alignSelf: 'center',
  },
  habitWrapper: {
    backgroundColor:'#eeee', 
    marginVertical: 10, 
    borderWidth: 1,
    borderRadius: 50,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'auto',
    borderRadius: 100,
  },
  cruz: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'auto',
    borderRadius: 100,
  },
  dummyText: {
    fontSize: 40, 
    opacity: 1
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