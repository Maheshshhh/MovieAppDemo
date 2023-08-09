import * as React from 'react';
import {View, Text, Image, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import Asset from '../assets/Asset';

const Watchlist = ({navigation}) => {

  return (
    <SafeAreaView>
      <View style={{alignItems:'center',}}>
    <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>My WatchList</Text>
    </View>
    <TouchableOpacity onPress={()=> navigation.goBack()} style={{position:'absolute'}}>
     <Image source={Asset.backButton} style={{resizeMode:'contain',}}/>
     </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Watchlist;
