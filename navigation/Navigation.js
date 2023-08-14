import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Details from '../screens/Details';
import Favorite from '../screens/Favorite';
import Watchlist from '../screens/WatchList';
import Register from '../screens/Register';
import store from '../state/store';
import { Provider } from 'react-redux';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import Asset from '../assets/Asset';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Home}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
         // let iconName;
          if (route.name === 'Home') {
            return focused ? (
              <Image source={Asset.homeOutline} />
            ) : (
              <Image source={Asset.home}/>
            );
          } else if (route.name === 'Profile') {
            return focused ? (
              <Image source={Asset.profile} />
            ) : (
              <Image source={Asset.profileOutline}/>
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};


export default MyStack = () => {
  return (
    <Provider store={store}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'vertical',
        gestureEnabled: false,
      }}
      initialRouteName={'Home'}
      headerMode="screen">
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="WatchList" component={Watchlist}/>
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
     </Provider>
  );
};
