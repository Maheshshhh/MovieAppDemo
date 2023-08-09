import * as React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';
import {useState, useEffect} from 'react';
import Asset from '../assets/Asset';

const Profile = ({navigation}) => {

  const [isLoggedIn, setIsLoggedIn] = useState('')

  const logout = () => {
      Alert.alert("Logout Successful")
      navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDetails}>
        <Text style={styles.userInfo}>Username:</Text>
        <Text style={styles.userInfo}>Email:</Text>
        <Text style={styles.userInfo}>Phone No:</Text>
         <View style={{width:'50%', backgroundColor:'purple', padding:3,alignItems:'center', borderTopRightRadius:100}}>
        <TouchableOpacity>
        <Text style={{color:'white', fontWeight:'600', fontSize:18}}>Update Details</Text>
        </TouchableOpacity>
        </View>
        <View style={{width:'50%', backgroundColor:'purple', padding:3,alignItems:'center', borderTopRightRadius:100, top:'1%'}}>
        <TouchableOpacity>
        <Text style={{color:'white', fontWeight:'600', fontSize:18}}>Change Password</Text>
        </TouchableOpacity>
        </View>
        <View style={{borderColor:'grey', borderWidth:0.5, marginTop:'2%'}}></View>
        <View style={{}}>
        <View style={{flexDirection:'row', height:'25%', justifyContent:'flex-start', width:'39%', alignItems:'center'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Favorite')} style={{flexDirection:'row'}}>
        <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold', color:'black'}}>My Favorites  </Text>
        <Image source={Asset.favorite} style={{height:40, width:40}}/>
        </TouchableOpacity>
        </View>
        <View style={{borderColor:'grey', borderWidth:0.5}}></View>
        <View onPress={()=> navigation.navigate('WatchList')} style={{height:'25%', flexDirection:'row', width:'43%', alignItems:'center'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('WatchList')} style={{flexDirection:'row'}}>
        <Text style={{alignSelf:'center',fontSize:20, fontWeight:'bold', color:'black'}}>My WatchList  </Text>
        <Image source={Asset.watchList} style={{height:40, width:40}}/>
        </TouchableOpacity>
        </View>
        <View style={{borderColor:'grey', borderWidth:0.5}}></View>
        </View>
      </View>
      <View style={{height:'20%', alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity style={{width:'70%',borderRadius:100,backgroundColor:'purple',}} onPress={()=> logout()}>
          <Text style={{fontSize:20, textAlign:'center', color:'white',padding:5, fontWeight:'600'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: 'grey',
  },
  userDetails: {
    //backgroundColor:'violet',
    height:'80%',
    padding:10
  },
  userInfo:{
    fontSize:18,
    color:'black',
    marginBottom:'2%',
    fontWeight:'500'
  }
});
