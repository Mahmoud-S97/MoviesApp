import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import Colors from '../styles/Colors';


const GenresCard = (props) => {

    const { name, image, onPress } = props;

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={onPress}>
            <View style={styles.creditsBox}>
                <Image source={image} style={styles.image} />
            </View>
            <Text numberOfLines={1} style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    card: {
        width: 80,
        height: 120,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    creditsBox: {
        width: 80,
        height: 80,
        borderRadius: 50,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    name: {
        fontSize: 12,
        color: Colors.black,
        fontWeight: 'bold',
        marginTop: 7
    }
});

export default GenresCard;