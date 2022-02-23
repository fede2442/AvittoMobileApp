import 'react-native-gesture-handler';
import React, {useState, useEffect}  from 'react';
import {View, StyleSheet, Text, FlatList, Pressable} from 'react-native';
import MainButtonHome from '../components/MainButtonHome';
import BottomMenu from '../components/BottomMenu';
import MainWindow from '../components/MainWindow';
import { NavigationContainer } from '@react-navigation/native';
import realm from '../realm/realm';
import GoalCard from '../components/GoalCard';
import Header from '../components/Header'
import DeleteEditCard from '../components/DeleteEditCard'
import store from '../redux/store';

const EditDelete = ({ navigation }) => {

  const [habitos, setHabitos] = useState([]);
  const [update, setUpdate] = useState(false);

  store.subscribe(()=>  setUpdate(store.getState().update))

  useEffect(() => {
    setHabitos(realm.objects("Habit"))
  }, [update]);

  async function eliminar(habit) {
    const habito_delete = realm.objects("Habit").filtered("name == '"+habit.name+"'")[0];
    await realm.write(() => {
      realm.delete(habito_delete)
    });
    store.dispatch({ type: 'UPDATE'});
  }

  return (
    <NavigationContainer>
        <View style={styles.container}>
        <Header navigation={navigation}/>
        <MainWindow >
            <FlatList 
                    ListHeaderComponent={
                      <>
                        <Text style={styles.flap}>Your Habits</Text>
                      </>}
                      data={habitos}
                      numColumns={1}
                      style={{marginBottom:10}}
                      keyExtractor={(item) => "EditDelete" + item.name}
                      renderItem={({item}) => ( 
                          <DeleteEditCard habit={JSON.parse(JSON.stringify(item))} deleteFunc={eliminar}/>
                      )}
            />
        </MainWindow>
        <BottomMenu navigation={navigation}/>
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
    paddingLeft: 20,
    width: '100%',
    fontWeight: 'bold',
    },
  flap: {
    padding: 30, 
    backgroundColor: '#1899A0', 
    marginTop: 20,
    marginBottom: 10, 
    width: '100%', 
    textAlign:'center',
    color: '#fff',
    fontWeight: 'bold'
  },

});

export default EditDelete;