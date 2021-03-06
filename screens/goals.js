import 'react-native-gesture-handler';
import React  from 'react';
import {View, StyleSheet, Text, FlatList, Animated, PanResponder} from 'react-native';
import MainButtonHome from '../components/MainButtonHome';
import BottomMenu from '../components/BottomMenu';
import MainWindow from '../components/MainWindow';
import { NavigationContainer } from '@react-navigation/native';
import icons from '../components/Images';
import realm from '../realm/realm';
import GoalCard from '../components/GoalCard';
import Header from '../components/Header'

const Goals = ({ navigation }) => {

  const habitos = realm.objects("Habit");
  
  let habitos2 = habitos.sorted( 'strikeCount' , true);

  let pan = new Animated.ValueXY();
  let _val = { x:0,y:0};
  pan.addListener((value) => _val = value);
  let panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderRelease: (e,gesture) => {
          console.log(gesture)
          if(Math.abs(gesture.dx) > 50){
            if(gesture.dx > 0 ){
              navigation.navigate('Home')
            }
          }
      }
  });

  return (
    <NavigationContainer>
        <View style={styles.container}>
        <Header navigation={navigation}/>
        <MainWindow >
        <Animated.View style= {{flex:1}}{...panResponder.panHandlers}>
          <FlatList 
                      ListHeaderComponent={
                      <>
                        <Text style={styles.flap}>Goals</Text>
                      </>}
                      data={habitos2}
                      numColumns={1}
                      renderItem={({item}) => ( 
                        <GoalCard habit={item}/>
                      )}
                      keyExtractor={(item) => "goals" + item.name}
                      />
        </Animated.View>
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
    fontSize: 20,
  },
  flap: {
    padding: 30, 
    backgroundColor: '#1899A0', 
    marginTop: 20, 
    width: '60%', 
    borderTopLeftRadius: 40, 
    borderBottomLeftRadius: 40,
    color: '#fff',
    alignSelf: 'flex-end',
  }

});

export default Goals;