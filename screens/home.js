import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, FlatList, Button } from 'react-native';
import MainButton from '../components/MainButton';
import BottomMenu from '../components/BottomMenu';
import MainWindow from '../components/MainWindow';
import { NavigationContainer } from '@react-navigation/native';
import Images from '../components/Images';
import Habit from '../components/Habit';
import { useDispatch, useSelector } from 'react-redux';
import contarMas from '../redux/reducers/notesApp'


const Home = ({ navigation }) => {

  const habits = useSelector(state => state);

  const dispatch = useDispatch();
  const contar_mas = () => dispatch(contarMas());

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainWindow backgroundImage={Images.rickBackground}>
          <FlatList 
                      data={habits.habitos}
                      numColumns={3}
                      renderItem={({item}) => ( 
                        <Habit habit={item}/>
                      )}
                      />
        </MainWindow>
        <MainButton navigation={navigation}/>
        <BottomMenu navigation={navigation} habits={habits.habitos}/>
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
  },
  text: {
    fontSize: 20,
  },

});

export default Home;