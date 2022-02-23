import React , {useState} from 'react';
import {StyleSheet, FlatList, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import {Formik, Form, Field, Option} from 'formik';
import { agregar_habito_action } from '../redux/reducers/notesApp';
import { useDispatch, useSelector } from 'react-redux';
import realm from '../realm/realm';
import DiaCheckbox from './DiaCheckbox';
import iconNames from '../utils/iconNames'
import icon from '../components/Images'

const AddHabitForm = ({ close }) => {
    
    const [selectedIcon,setSelectedIcon] = useState("");

    const dias =  ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

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

    return (
        <View>
            <Formik
                initialValues={{ nombre: '', dias: {lunes: false, martes: false, miercoles: false, jueves: false, viernes: false, sabado: false, domingo: false} }}
                onSubmit={(values) => {
                    realm.write(() => {
                        realm.create("Habit", {
                        name: values.nombre,
                        last_mod: new Date(),
                        strikeCount: 0,
                        strikeHistoricMax: 0,
                        habitIcon: selectedIcon,
                        dias: values.dias
                    }, );
                    });

                    alert('Habito agregado');
                    close(false);
                }}
            >
            {(props) => (
                <View >
                    <TextInput
                        style={styles.textInput}
                        placeholder='Nombre del Habito'
                        onChangeText={props.handleChange('nombre')}
                        value={props.values.nombre}
                    />
                       {/* 
                    <TextInput
                        style={styles.textInput}
                        placeholder='Elegir Icono'
                        onChangeText={props.handleChange('icono')}
                        value={props.values.icono}
                        //keyboardType='numeric'
                    />*/}
                    <View style={{flexDirection:'row', marginVertical: 10,alignItems:'center'}}>
                        <Text > Icono seleccionado: </Text>
                        {icon(selectedIcon)}
                    </View>
                    <View style={{height:250,width:'100%',alignSelf:'center', borderWidth:1.5, borderColor:'grey',borderRadius:5}}>
                    <FlatList 
                      data={iconNames}
                      numColumns={4}
                      style={{marginBottom:5}}
                      keyExtractor={(item) => "AddHabit" + item.name}
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
                </View>
            )}
            </Formik>
        </View>
    )



}

export default AddHabitForm;