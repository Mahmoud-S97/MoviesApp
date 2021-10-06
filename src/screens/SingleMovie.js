import React from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import Header from '../components/Header';
import GoBackIcon from '../components/GoBackIcon';
import Colors from '../styles/Colors';
import GenresCard from '../components/GenresCard';

const SingleMovie = ({ navigation, route: { params: { movieData } } }) => {

    return (
        <ScrollView style={{ flex: 1 }}>
            <Header style={styles.header}>
                <GoBackIcon />
            </Header>
            <View style={styles.posterBox}>
                <Image source={{ uri: movieData.poster }} style={styles.poster} />
            </View>
            <View style={styles.content}>
                <Text style={styles.filmTitle}>{movieData.title}</Text>
                <Text style={styles.rate}>{movieData.rate}</Text>
                <View style={styles.overViewBox}>
                    <Text style={styles.mainTitle}>Over View</Text>
                    <Text style={styles.overViewText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>
                <Text style={styles.mainTitle}>Genres</Text>
                <View style={styles.movieFeatures}>
                    {movieData.features.length > 0 ? movieData.features?.map((item, index) => (
                        <Text key={index} style={styles.featureText}>{item}</Text>
                    )) : <Text>There's No Data</Text>}
                </View>
                <Text style={styles.mainTitle}>Credits</Text>
                <View style={styles.container}>
                    {movieData.credits.length ? (
                        <FlatList
                        data={movieData.credits}
                        keyExtractor={(item, index) => item?.credit_id.toString() || index.toString()}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        renderItem={({ item, index }) => (
                            <GenresCard
                                name={item.name}
                                image={item.image}
                                onPress={() => { }}
                            />
                        )}
                    />
                    ) : <Text>There's No Data</Text>}
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 0
    },
    posterBox: {
        width: Dimensions.get('window').width / 2,
        height: 300,
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden'
    },
    poster: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    content: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 15
    },
    filmTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.black
    },
    rate: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.primary,
        marginVertical: 12
    },
    overViewBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    mainTitle: {
        fontSize: 17,
        color: Colors.black,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    overViewText: {
        textAlign: 'left',
        fontSize: 14,
        color: Colors.gray,
        lineHeight: 20,
        marginVertical: 10
    },
    movieFeatures: {
        width: '95%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15
    },
    featureText: {
        padding: 5,
        backgroundColor: Colors.lightGray,
        color: Colors.black,
        fontSize: 10,
        borderRadius: 25,
        textAlign: 'center',
        margin: 3
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 12
    }
});

export default SingleMovie;