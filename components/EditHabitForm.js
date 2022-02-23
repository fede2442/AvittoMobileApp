import React, {useState} from 'react';
import {StyleSheet,  View, TextInput, Button, TouchableOpacity, Text, FlatList, ScrollView, Keyboard } from 'react-native';
import {Formik} from 'formik';
import realm from '../realm/realm';
import DiaCheckbox from './DiaCheckbox';
import store from '../redux/store';
import iconNames from '../utils/iconNames'
import icon from '../components/Images'

const EditHabitForm = ({ close, nombre, icono, diasHab }) => {

    const [selectedIcon,setSelectedIcon] = useState(icono);

    const styles = StyleSheet.create({
        textInput: {
            borderWidth: 1,
            borderColor: 'grey',
            padding: 5,
            borderRadius:5,
            fontSize:18,
            margin:5,
        }
    })
    
    const dias =  ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

    return (
        <View>
            <Formik
                initialValues={{ nombre: nombre, icono: icono, dias: JSON.parse(JSON.stringify(diasHab)) }}
                onSubmit={(values) => {
                    console.log("nombre = "+ values.nombre)
                    const habito = realm.objects("Habit").filtered("name == '"+ nombre +"'")[0];
                    realm.write(() => {
                        habito.name =  values?.nombre;
                        habito.habitIcon = values?.icono;
                        habito.dias =  values?.dias;
                    });
                    store.dispatch({ type: 'UPDATE'});
                    alert('Habito modificado' + habito.dias);
                    close(false);
                }}
            >
            {(props) => (
                <View >
                <ScrollView contentContainerStyle={{flexGrow: 1}}
                    keyboardShouldPersistTaps='handled'
                    >
                    <TextInput
                        style={styles.textInput}
                        placeholder='Nombre del Habito'
                        onChangeText={props.handleChange('nombre')}
                        value={props.values.nombre}
                    />

                    <View style={{flexDirection:'row', marginVertical: 10, alignItems:'center'}}>
                        <Text > Icono seleccionado: </Text>
                        {icon(selectedIcon)}
                    </View>
                    <View style={{height:250,width:'100%',alignSelf:'center', borderWidth:1.5, borderColor:'grey',borderRadius:5}}>
                    <FlatList 
                      data={iconNames}
                      numColumns={4}
                      style={{marginBottom:5}}
                      keyExtractor={(item) => "EditHabit" + item}
                      renderItem={({item}) => ( 
                          <TouchableOpacity onPress={() => setSelectedIcon(item)} style={{width:'25%', justifyContent:'center', alignItems:'center'}}>
                            {icon(item)}
                          </TouchableOpacity>
                      )}
                    />
                    </View>
                    
                    {dias.map(el => {
                        return <DiaCheckbox element={el} formikProps={props}/>
                    })}
                        
                    <Button title='submit' onPress={props.handleSubmit}/>
                    </ScrollView>
                </View>
            )}
            </Formik>
        </View>
    )

}

export default EditHabitForm;