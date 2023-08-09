import * as React from 'react';
import {View, Text, Image, Button, SafeAreaView, Dimensions, TouchableWithoutFeedback} from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from 'react-native-snap-carousel';
import {ViewPropTypes} from 'deprecated-react-native-prop-types'; 
import Asset from '../assets/Asset';
import { image500 } from '../api/moviesApi';
import { useNavigation } from '@react-navigation/native';

var {width, height} = Dimensions.get('window');

const TrendingMovies = ({ data}) => {

    const navigation = useNavigation();

    const handleClick = item=>{
        navigation.navigate('Details', item);
    }
    
  return (
    <SafeAreaView>
     <View style={{flexDirection:'row', justifyContent:'space-between',}}>
      <Text style={{left:'30%', fontSize:18,color:'black', fontWeight:'bold'}}>Trending</Text>
      </View>
    <Carousel 
        data={data}
            renderItem={({item})=> <MovieCard handleClick={handleClick} item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.60}
            sliderWidth={width}
            itemWidth={width*0.62}
            slideStyle={{display: 'flex', alignItems: 'center'}}
    />
    </SafeAreaView>
  );
};

const MovieCard = ({item, handleClick})=>{
    console.log("PosterPath-----", item.poster_path)

    return (
        <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
            <Image 
                // source={Asset.bgImage1} 
                source={{uri: image500(item.poster_path)}} 
                style={{
                    width: width * 0.6,
                    height: height * 0.4,
                    borderRadius:10
                }}
            />
        </TouchableWithoutFeedback>
    )
}

export default TrendingMovies;
