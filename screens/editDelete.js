import 'react-native-gesture-handler';
import React  from 'react';
import {View, StyleSheet, Text, FlatList, Pressable} from 'react-native';
import MainButtonHome from '../components/MainButtonHome';
import BottomMenu from '../components/BottomMenu';
import MainWindow from '../components/MainWindow';
import { NavigationContainer } from '@react-navigation/native';
import realm from '../realm/realm';
import GoalCard from '../components/GoalCard';
import Header from '../components/Header'
import DeleteEditCard from '../components/DeleteEditCard'
const EditDelete = ({ navigation }) => {

  const habitos = realm.objects("Habit");

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
                      renderItem={({item}) => ( 
                          <DeleteEditCard habit={item}/>
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