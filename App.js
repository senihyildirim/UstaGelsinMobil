import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/loginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/homePage';
import PastOrdersPage from './src/pages/pastOrdersPage';
import ProfilePage from './src/pages/profilePage';
import AdressPage from './src/pages/adressPage';
import MarketPage from './src/pages/marketPage';


const App = () => {
  const screenOptions = {
    headerShown: false,
    animationEnabled: false,
};


const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="PastOrders" component={PastOrdersPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Adress" component={AdressPage} />
        <Stack.Screen name="Market" component={MarketPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


export default App;
