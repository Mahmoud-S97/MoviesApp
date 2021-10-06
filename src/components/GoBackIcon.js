import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../styles/Colors';


const GoBackIcon = (props) => {

    const { goBack } = useNavigation();

    return (
        <TouchableOpacity style={{...styles.backBtn, ...props.styles}} onPress={() => goBack()} >
            <AntDesign name='left' style={{...styles.icon, ...props.iconStyle}} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    backBtn: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 20,
        color: Colors.black
    }
});

export default GoBackIcon;