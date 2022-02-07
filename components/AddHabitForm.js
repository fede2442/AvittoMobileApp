import React from 'react';
import {StyleSheet, Image , View, Modal, Text, TextInput, Button } from 'react-native';
import {Formik} from 'formik';

export default function AddHabitForm() {

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
                initialValues={{ nombre: '', icono: '', dias: ''}}
                onSubmit={(values) => {
                    console.log(values)
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
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Dias'
                        onChangeText={props.handleChange('dias')}
                        value={props.values.dias}
                    />
                    <Button title='submit' onPress={props.handleSubmit}/>
                </View>
            )}
            </Formik>
        </View>
    )

}
