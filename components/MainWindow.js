import React from 'react';
import {View, StyleSheet, ImageBackground, ScrollView} from 'react-native';

const MainWindow = (props) => {
    
    return(
        <View style={styles.mainWindow} >
            <ImageBackground style={styles.backgroundImage} >
            <ScrollView>
                { props.children }
            </ScrollView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWindow: {
        flex: 25,
        borderRadius: 70,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical: 10,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: '#383D3B',
    },
    text: {
        fontSize: 20,
    },
    backgroundImage: {
        flex: 1,
        backgroundColor:'#EEE5E9'
    }

});


export default MainWindow;