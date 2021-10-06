import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Colors from '../styles/Colors';

const Header = (props) => {
    return (
        <View style={{ ...styles.header, ...props.style }}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        paddingHorizontal: 12,
        marginTop: StatusBar.currentHeight
    }
});

export default Header;