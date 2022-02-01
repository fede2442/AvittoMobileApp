import 'react-native-gesture-handler';
import React  from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MainButton from '../components/MainButton';
import BottomMenu from '../components/BottomMenu';
import MainWindow from '../components/MainWindow';
import { NavigationContainer } from '@react-navigation/native';
import Images from '../components/Images';

const Goals = ({ navigation }) => {

  const habits = navigation.getParam('habits');

  return (
    <NavigationContainer>
        <View style={styles.container}>
        <MainWindow backgroundImage={Images.rickBackground2}>
          <Text style={styles.flap}>Goals</Text>
        </MainWindow>
        <MainButton navigation={navigation}/>
        <BottomMenu navigation={navigation} habits={habits}/>
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
  flap: {
    padding: 30, 
    backgroundColor: '#292B8B', 
    marginTop: 20, 
    width: '50%', 
    borderTopLeftRadius: 40, 
    borderBottomLeftRadius: 40,
    color: '#fff',
    alignSelf: 'flex-end',
    alignContent: 'center',
  }

});

export default Goals;