import React from 'react';
import {View, StyleSheet, ImageBackground, ScrollView} from 'react-native';

const MainWindow = (props) => {
    
    return(
        <View style={styles.mainWindow} >
            <ImageBackground source={props.backgroundImage} style={styles.backgroundImage} >
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
        borderColor: '#bbb',
    },
    text: {
        fontSize: 20,
    },
    backgroundImage: {
        flex: 1,
    }

});


export default MainWindow;