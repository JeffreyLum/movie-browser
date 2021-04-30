import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'

const ScreenOne = props => {

    const [movieName, setMovieName] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Search for a Movie</Text>
            <TextInput placeholderTextColor={'#2E8BC0'} placeholder='Enter Movie' style={styles.textInputStyle} value={movieName} onChangeText={(text) => setMovieName(text)} />

            <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('ScreenTwo', { movieName: movieName })}>
                <Text style={styles.buttonTextStyle}>Search For Film</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSingleStyle} onPress={() => props.navigation.navigate('QuickSearchScreen', { movieName: movieName })}>
                <Text style={styles.buttonTextStyle}>Quick Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C2D48',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        fontSize: 35,
        color: '#B1D4E0',
        height: 100
    },

    textInputStyle: {
        color: '#B1D4E0',
        margin: 25,
        backgroundColor: '#145DA0',
        borderRadius: 10,
        width: 200,
        textAlign: 'center'
    },

    buttonStyle: {
        backgroundColor: '#2E8BC0',
        borderRadius: 15,
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignContent: 'center'
    },

    buttonSingleStyle: {
        backgroundColor: '#2E8BC0',
        borderRadius: 15,
        marginTop: 20,
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignContent: 'center'
    },

    buttonTextStyle: {
        fontSize: 20,
        color: '#B1D4E0',
        textAlign: 'center'
    }
});

export default ScreenOne