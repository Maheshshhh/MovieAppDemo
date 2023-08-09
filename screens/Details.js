import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fetchMovieDetails} from '../api/moviesApi';
import Asset from '../assets/Asset';
import {useRoute} from '@react-navigation/native';
import {image500} from '../api/moviesApi';

var {width, height} = Dimensions.get('window');

const Details = ({navigation}) => {
  const {params: item} = useRoute();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isFavourite, toggleFavourite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieDetials(item.id);
  }, [item]);

  const getMovieDetials = async id => {
    const data = await fetchMovieDetails(id);
    console.log('got movie details');
    setLoading(false);
    if (data) {
      setMovie({...movie, ...data});
    }
  };
  const addToFavorite = () => {
    Alert.alert('Added to Favorites')
  };

  const addToWatchList = () => {
    Alert.alert('Added to WatchList')
  }

  return (
    <View style={{flex:1}}>
    <ScrollView contentContainerStyle={{paddingBottom: 20, flex:1}}>
      <Image
        source={{uri: image500(movie?.poster_path)}}
        style={{width, height: height * 0.66,resizeMode:'stretch'}}
      />
      <TouchableOpacity onPress={()=> navigation.goBack()} style={{position:'absolute'}}>
     <Image source={Asset.backButton} style={{resizeMode:'contain',}}/>
     </TouchableOpacity>
        <Text style={{fontSize:18}}>
            {
                movie?.title
            }
        </Text>
        {
            movie?.id? (
                <Text style={{fontSize:14}}>
                    {movie?.status} • {movie?.release_date?.split('-')[0] || 'N/A'} • {movie?.runtime} min
                </Text>
            ):null
        }
        <Text>
            {
                movie?.overview
            }
        </Text>
      <View>
        {loading ? (
          // <Loading />

          <View>
            <Image
             // source={Asset.bgImage1}
              source={{uri: image500(movie?.poster_path)}}
              style={{width, height: height * 0.55,}}
            />
          </View>
        ) : null}
      </View>
    </ScrollView>
    <View style={{flexDirection:'row', flex:0.12, justifyContent:'space-around', alignItems:'center'}}>
        <TouchableOpacity onPress={()=> addToFavorite()}>
          <Image source={Asset.favorite} style={{height:60, width:60}} />
          <Text style={{color:'black', textAlign:'center'}}>Favorite</Text>
        </TouchableOpacity>
     
        <TouchableOpacity onPress={()=> addToWatchList()}>
          <Image source={Asset.watchList} style={{height:60, width:60}} />
          <Text style={{color:'black', textAlign:'center'}}>WatchList</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default Details;
