import * as React from 'react';
import {View, Text, ImageBackground, Button, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import Asset from '../assets/Asset';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../state/action';

const Login = ({navigation}) => {

  const dispatch = useDispatch()
//   const userData = useSelector((state)=> state.userReducer.userDetails)
// console.log('user--------', userData)

// useEffect(() => {
//   async function fetchData() {
//       let args = { username: userData[0]?.A_USER_NAME }
//       await dispatch(getUserDetails(args));
//   }
//   fetchData();
// }, []);
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const validateLogin = () => {
  if (username == '' || password =='') {
    Alert.alert('username or password is incorrect')
  } else {
    navigation.navigate('Home')
  }
}
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={Asset.bgImage1} style={styles.bgImage}>
    <View style={styles.headerLogin}>
        <Text style={styles.loginText}>Login</Text>
    </View>
      <View style={styles.loginData}>
      <Text style={styles.welcome}>Welcome to MovieBuzz</Text>
      <Text style={styles.loginAcc}>Login to your account</Text>
        <TextInput placeholder='Username' value={username} onChangeText={text => { setUsername(text);}} style={styles.textInput}/>
        <TextInput placeholder='Password' value={password} onChangeText={text => { setPassword(text);}} secureTextEntry={true} style={styles.textInput}/>
        <TouchableOpacity>
        <Text style={{color:'purple', left:'25%', top:'2%'}}>Forgot Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={()=> validateLogin()}>
        <Text style={{fontSize:20, color:'white', textAlign:'center', fontWeight:'bold', padding:5}}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', top:'90%'}}>
      <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
        <Text style={{color:'purple'}}>Register</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'yellow'
    },
    headerLogin:{
        height:'15%',
        alignItems:'center',
        justifyContent:'center',
      //  backgroundColor:'purple'
    },
    loginText:{
        fontSize:35,
        color:'white',
        fontWeight:'bold'
    },
    loginData:{
        height:'90%',
        backgroundColor:'white',
        padding:60,
        borderTopLeftRadius:150,
        alignItems:'center',
    },
    welcome:{
        color:'purple',
        fontSize:25,
        marginTop:'10%'
    },
    loginAcc:{
        fontSize:16
    },
    textInput:{
        borderRadius:100,
        backgroundColor:'lightgrey',
        width:'100%',
        marginTop:'5%',
        paddingLeft:10
    },
    loginButton:{
        top:'40%',
        width:'90%',
        backgroundColor:'purple',
       borderRadius:100,
       
    },
    bgImage:{
        resizeMode:'contain'
    }
})

export default Login;
