import * as React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import {fetchTopRatedMovies, fetchTrendingMovies} from '../api/moviesApi';
import TrendingMovies from '../components/trendingMovies';
import MoviesList from '../components/moviesList';
import Asset from '../assets/Asset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import {getUserDetailsSelector} from '../selector/getUserDetailsSelector';
import {useSelector} from 'react-redux';

const Home = ({navigation, route}) => {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const isFocused = useIsFocused();
  const userDetail = useSelector(getUserDetailsSelector);
   

  useEffect(() => {
    getTrendingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);
    // setLoading(false);
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) setTopRated(data.results);
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#d3d3d3"}}>
      <View style={{height:'5%', alignItems:'center'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'purple', padding:5}}>Hello {userDetail?.userName ? userDetail?.userName : '@User'}</Text>
      </View>
      <ScrollView howsVerticalScrollIndicator={false}>
        <TrendingMovies data={trending}/>
        <MoviesList data={topRated} />
      </ScrollView>
      <View style={{width:'70%', alignSelf:'center', bottom:'3%'}}>
        {
          userDetail?.userName ?  <TouchableOpacity onPress={()=> navigation.navigate('Favorite')} style={{backgroundColor:'purple', borderRadius:100, justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:20, color:'white', padding:5, fontWeight:'bold'}}>Go to Favorites</Text>
          </TouchableOpacity> :
          <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={{ backgroundColor:'purple', borderRadius:100, justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:20, color:'white', padding:5, fontWeight:'bold'}}>Sign In</Text>
          </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  );
};

export default Home;
