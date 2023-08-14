/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigation/Navigation'
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { FavoriteProvider } from './src/state/favoriteContext';
// import store from './src/state/store';
FavoriteProvider

function App() {
  
  return (
    <FavoriteProvider>
    <NavigationContainer>
    <MyStack />
   </NavigationContainer>
   </FavoriteProvider>
  );
}

export default App;
