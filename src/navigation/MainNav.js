import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SingleMovie from '../screens/SingleMovie';

const Stack = createNativeStackNavigator();
const MainNav = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='SingleMovie' component={SingleMovie} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    )
};

export default MainNav;