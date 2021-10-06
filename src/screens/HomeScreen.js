import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import Colors from '../styles/Colors';
import { allData } from '../components/DummyData';

const HomeScreen = ({ navigation }) => {

const [type, setType] = useState('Upcoming');
const [data, setData] = useState(allData);

const getTypes = (type) => {
    const oldData = [...data];
    if(type == 'Upcoming') {
        const updated = oldData.filter(item => item.isUpcoming === true);
        setType(type);
        setData(updated);
    } else if (type === 'Popular') {
        const updated = oldData.filter(item => item.isPopular === true);
        setType(type);
        setData(updated);
    } else if (type === 'TopRated') {
        const updated = oldData.filter(item => item.isTopRated === true);
        setType(type);
        setData(updated);
    }
}

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Text style={styles.title}>Movies</Text>
            </Header>
            <View style={styles.btnGroup}>
                <TouchableOpacity activeOpacity={0.6} style={[styles.tabBtn, type === 'Upcoming' && styles.active]} onPress={() => getTypes('Upcoming')}>
                    <Text style={[styles.tabText, type === 'Upcoming' && styles.activeText]}>Upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={[styles.tabBtn, type === 'Popular' && styles.active]} onPress={() => getTypes('Popular')}>
                    <Text style={[styles.tabText, type === 'Popular' && styles.activeText]}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={[styles.tabBtn, type === 'TopRated' && styles.active]} onPress={() => getTypes('TopRated')}>
                    <Text style={[styles.tabText, type === 'TopRated' && styles.activeText]}>Top Rated</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                {data.length ? (
                    <FlatList
                    data={data}
                    keyExtractor={(item, index) => item?.id.toString() || index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index}) => (
                    <MovieCard
                        title={item.title}
                        poster={item.poster}
                        date={item.date}
                        features={item.features}
                        rate={item.rate}
                        onPress={() => navigation.navigate('SingleMovie', { movieData: item })}
                    />
                    )}
                />
                ) : <Text style={{ textAlign: 'center' }}>Tthere's No Data!</Text>}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.black
    },
    btnGroup: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    tabBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGray,
        paddingVertical: 8,
        width: '30.333%',
        borderRadius: 50
    },
    tabText: {
        fontSize: 16,
        color: Colors.black,
        fontWeight: 'bold'
    },
    active: {
        backgroundColor: Colors.primary,
        shadowColor: Colors.black,
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.24,
        shadowRadius: 12,
        elevation: 8
    },
    activeText: {
        color: Colors.white
    },
    container: {
        flex: 1
    }
});

export default HomeScreen;