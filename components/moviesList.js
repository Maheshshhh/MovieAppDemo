import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Asset from '../assets/Asset';
import { image185 } from '../api/moviesApi';

const {width, height} = Dimensions.get('window');

const MoviesList = ({ hideSeeAll, data}) => {
  const navigation = useNavigation();
  const handleClick = item=>{
    navigation.navigate('Details', item);
}

  return (
    <View style={{top:height*0.03}}>
      <View style={{flexDirection:'row', justifyContent:'space-between',}}>
      <Text style={{left:'30%', fontSize:17,color:'black', fontWeight:'500'}}>Also Watch</Text>
            <TouchableOpacity style={{right:'30%'}}>
              <Text style={{fontSize:17,color:'black',fontWeight:'500'}}>See All</Text>
            </TouchableOpacity>
      </View>
      
      <ScrollView
         horizontal
        style={{paddingHorizontal:10}}
        >
        {
            data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
            //   onPress={() => navigation.push('Details', item)}
              >
              <View>
              <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
                <Image
                  // source={Asset.bgImage}
                   source={{uri: image185(item.poster_path)}}
                   style={{width: width * 0.33, height: height * 0.28,}}
                />
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default MoviesList;
