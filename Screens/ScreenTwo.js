import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { View, Text, StyleSheet, Button, SafeAreaView, TextInput, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'

//omdbapi.com/?s=Nobody&apikey=2952fff9
//omdbapi.com/?t=Nobody&apikey=2952fff9

const ScreenTwo = props => {

    const [Search, setSearch] = useState([])

    useEffect(() => {

        const getMovie = async (movieName) => {

            if (movieName === '') movieName = 'Dab'

            const url = 'http://www.omdbapi.com/?s=' + movieName + '&apikey=2952fff9&type=movie'

            const responseMovieTitle = await fetch(url)

            const movie = await responseMovieTitle.json()

            setSearch(Search.concat(movie.Search))

        }

        getMovie(props.route.params.movieName)

    }, [])

    const renderMovies = listItem => {



        return (
            <View style={styles.container}>

                <Image source={{ uri: listItem.item.Poster }} style={styles.moviePoster} />
                <Text style={styles.textStyle}>{listItem.item.Title}</Text>
                <Text style={styles.textStyle}>{listItem.item.Year}</Text>

                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => props.navigation.navigate('ScreenThree', { movieName: listItem.item.imdbID })}>
                    <Text style={styles.buttonTextStyle}>Show More</Text>
                </TouchableOpacity>

            </View>
        )

    }

    return (
        <View style={styles.container}>

            <FlatList
                data={Search}
                renderItem={renderMovies}
                keyExtractor={(item, index) => {
                    return index.toString()     // not the best fix, but fixes the 'each child in a list should have a unique key prop' warning
                }}
            />

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
        fontSize: 25,
        color: '#B1D4E0',
        textAlign: 'center'
    },

    moviePoster: {
        width: 150,
        height: 210,
        flex: 1,
        margin: 10
        // resizeMode: 'center',
    },

    buttonStyle: {
        backgroundColor: '#2E8BC0',
        borderRadius: 15,
        width: 125,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },

    buttonTextStyle: {
        fontSize: 20,
        color: '#B1D4E0',
        textAlign: 'center'
    }

});

export default ScreenTwo