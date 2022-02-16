import 'react-native-gesture-handler';
import React  from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import MainButton from '../components/MainButton';
import BottomMenu from '../components/BottomMenu';
import MainWindow from '../components/MainWindow';
import { NavigationContainer } from '@react-navigation/native';
import icons from '../components/Images';
import realm from '../realm/realm';
import GoalCard from '../components/GoalCard';

const Goals = ({ navigation }) => {

  const habitos = realm.objects("Habit");

  return (
    <NavigationContainer>
        <View style={styles.container}>
        <MainWindow >
          <Text style={styles.flap}>Goals</Text>
          <FlatList 
                      data={habitos}
                      numColumns={1}
                      renderItem={({item}) => ( 
                        <GoalCard habit={item}/>
                      )}
                      style={{padding:10}}
                      />
        </MainWindow>
        <BottomMenu navigation={navigation}/>
        <MainButton navigation={navigation}/>
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