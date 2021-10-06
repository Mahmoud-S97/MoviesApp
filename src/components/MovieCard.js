import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import Colors from '../styles/Colors';


const MovieCard = (props) => {

    const { poster, title, date, features, rate, onPress } = props;

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={onPress}>
            <View style={styles.posterBox}>
                <Image source={{ uri: poster }} style={styles.poster} />
            </View>
            <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>{title}</Text>
                <Text style={styles.dateText}>{date}</Text>
                <View style={styles.movieFeatures}>
                    {features?.map((item, index) => (
                        <Text key={index} style={styles.featureText}>{item}</Text>
                    ))}
                </View>
                <Text style={styles.rate}>{rate}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 160,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 12,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 15
    },
    posterBox: {
        width: '30%',
        height: '100%',
        borderRadius: 15,
        overflow: 'hidden'
    },
    poster: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    movieInfo: {
        width: '66%',
        marginLeft: '4%',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        marginBottom: 10
    },
    dateText: {
        fontSize: 14,
        color: Colors.darkGray,
        marginBottom: 10
    },
    movieFeatures: {
        width: '95%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    featureText: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: Colors.lightGray,
        color: Colors.black,
        fontSize: 10,
        borderRadius: 25,
        textAlign: 'center',
        margin: 3
    },
    rate: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        right: 5,
        bottom: 5,
        zIndex: 1000
    }
});

export default MovieCard;