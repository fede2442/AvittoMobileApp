import React from 'react';
import {StyleSheet,  View, TextInput, Button } from 'react-native';
import {Formik} from 'formik';
import realm from '../realm/realm';
import DiaCheckbox from './DiaCheckbox';

const EditHabitForm = ({ close, nombre, icono, diasHab }) => {

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
                initialValues={{ nombre: nombre, icono: icono, dias: diasHab }}
                onSubmit={(values) => {
                    console.log("nombre = "+ values.nombre)
                    realm.write(() => {
                        let habito = realm.objects("Habit").filtered(`name == '${nombre}'`);
                        habito.name =  values?.nombre;
                        habito.habitIcon = values?.icono;
                        habito.dias =  values?.dias;
                    });
                    
                    alert('Habito modificado');
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

export default EditHabitForm;