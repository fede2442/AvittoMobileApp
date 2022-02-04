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
        borderWidth: 1,
        borderColor: '#99999A',
    },
    text: {
        fontSize: 20,
    },
    backgroundImage: {
        flex: 1,
        backgroundColor:'#B6C0CE'
    }

});


export default MainWindow;