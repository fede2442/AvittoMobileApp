import React from 'react';
import {StyleSheet, Image , View, Modal, Text, TextInput, Button, CheckBox } from 'react-native';
import {Formik, Form, Field, Option} from 'formik';
import { agregar_habito_action } from '../redux/reducers/notesApp';
import { useDispatch, useSelector } from 'react-redux';
import realm from '../realm/realm';
import DiaCheckbox from './DiaCheckbox';

const AddHabitForm = ({ close }) => {
    const dispatch = useDispatch();
    const agregar_habito = (nombre,icon) => dispatch(agregar_habito_action(nombre,icon));

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
                initialValues={{ nombre: '', icono: '', dias: {lunes: false, martes: false, miercoles: false, jueves: false, viernes: false, sabado: false, domingo: false} }}
                onSubmit={(values) => {
                    realm.write(() => {
                        realm.create("Habit", {
                        name: values.nombre,
                        last_mod: new Date(),
                        strikeCount: 0,
                        strikeHistoricMax: 0,
                        habitIcon: values.icono,
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

                    <TextInput
                        style={styles.textInput}
                        placeholder='Elegir Icono'
                        onChangeText={props.handleChange('icono')}
                        value={props.values.icono}
                        //keyboardType='numeric'
                    />
                    
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