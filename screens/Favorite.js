import * as React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useState, useContext} from 'react';
import Asset from '../assets/Asset';
import {FavoriteContext} from '../state/favoriteContext';
import {image500} from '../api/moviesApi';

var {width, height} = Dimensions.get('window');
const Favorite = ({navigation}) => {
  const {favorites} = useContext(FavoriteContext);
  

  const renderFavoriteRows = () => {
    const rows = [];
    for (let i = 0; i < favorites.length; i += 2) {
      const row = (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10,
          }}
          key={i}>
          <Image
            source={{uri: image500(favorites[i]?.poster_path)}}
            style={{width: width * 0.4, height: height * 0.3}}
          />
          {favorites[i + 1] && (
            <Image
              source={{uri: image500(favorites[i + 1]?.poster_path)}}
              style={{width: width * 0.4, height: height * 0.3}}
            />
          )}
        </View>
      );
      rows.push(row);
    }
    return rows;
  };

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          My Favorites
        </Text>
      </View>
      {/* {favorites.map(movie => (
        <Image
          key={movie.id}
          source={{uri: image500(movie?.poster_path)}}
          style={{width: width * 0.4, height: height * 0.3}}
        />
      ))} */}
      {renderFavoriteRows()}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{position: 'absolute'}}>
        <Image source={Asset.backButton} style={{resizeMode: 'contain'}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Favorite;
