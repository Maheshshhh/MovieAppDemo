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
import store from './src/state/store';

function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
    <MyStack />
   </NavigationContainer>
   </Provider>
  );
}

export default App;
