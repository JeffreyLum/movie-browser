import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, TextInput, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'

//http://www.omdbapi.com/?s=Nobody&apikey=2952fff9
//http://www.omdbapi.com/?t=Nobody&apikey=2952fff9

const QuickSearchScreen = props => {


    const [movie, setMovie] = useState('')
    const [Year, setYear] = useState('')
    const [Rated, setRated] = useState('')
    const [Plot, setPlot] = useState('')
    const [Poster, setPoster] = useState('')
    const [Runtime, setRuntime] = useState('')
    const [Genre, setGenre] = useState('')
    const [Director, setDirector] = useState('')
    const [Ratings, setRatings] = useState('')
    const [Actors, setActors] = useState('')

    useEffect(() => {

        const getMovie = async (movieName) => {
            
            if (movieName === '') movieName = 'Sus'

            const url = 'http://www.omdbapi.com/?t=' + movieName + '&apikey=2952fff9&type=movie'

            const responseMovieTitle = await fetch(url)

            const movie = await responseMovieTitle.json()

            setPoster(movie.Poster)
            setMovie(movie.Title)
            setYear(movie.Year)
            setRated(movie.Rated)
            setPlot(movie.Plot)
            setRuntime(movie.Runtime)
            setGenre(movie.Genre)
            setDirector(movie.Director)
            setRatings(movie.imdbRating)
            setActors(movie.Actors)
        }

        getMovie(props.route.params.movieName)

    }, [])


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.pictureRow}>
                        {/* To resolve the 'source.uri should not be an empty string' warning */}
                        <Image source={Poster ? { uri: Poster } : null} style={styles.moviePoster} />
                    </View>

                    <View style={styles.textRow}>
                        <Text style={styles.textStyle}>{movie}</Text>
                        <Text style={styles.textStyle}>Release Year: {Year}</Text>
                        <Text style={styles.textStyle}>Runtime: {Runtime}</Text>
                        <Text style={styles.textStyle}>Director: {Director}</Text>
                        <Text style={styles.textStyle}>Rating: {Rated}</Text>
                        <Text style={styles.textStyle}>IMDB Score: {Ratings}/10</Text>

                    </View>
                </View>
                <Text style={styles.textStyleBelowTitle}>Genre(s):</Text>
                <Text style={styles.textStyleBelow}>{Genre}</Text>

                <Text style={styles.textStyleBelowTitle}>Cast:</Text>
                <Text style={styles.textStyleBelow}>{Actors}</Text>

                <Text style={styles.textStyleBelowTitle}>Plot:</Text>
                <Text style={styles.textStyleBelow}>{Plot}</Text>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C2D48',
        flexDirection: 'row'
    },

    textRow: {
        textAlign: 'left',
        marginTop: 80,

    },

    moviePoster: {
        width: 210,
        height: 310,
        flex: 1,
        marginLeft: 5,
        marginRight: 10,
        marginTop: 80,
        justifyContent: 'flex-end'

    },

    textStyle: {
        color: '#B1D4E0',
        fontSize: 15,
        width: 190,
        marginBottom: 20,

    },

    textStyleBelow: {
        color: '#B1D4E0',
        fontSize: 15,
        marginBottom: 15,
        marginLeft: 10,
    },

    textStyleBelowTitle: {
        color: '#B1D4E0',
        fontSize: 18,
        marginLeft: 10,
    },

});

export default QuickSearchScreen