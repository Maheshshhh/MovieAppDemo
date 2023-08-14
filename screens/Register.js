import * as React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useState} from 'react';
import Asset from '../assets/Asset';
import {useSelector, useDispatch} from 'react-redux';
import {createUser} from '../state/slice';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [userCreateData, serUserCreateData] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    userId: '',
  });

  const handleOnChange = (field, value) => {
    serUserCreateData(preState => ({
      ...preState,
      [field]: value,
    }));
  };
  const userData = useSelector(state => state.userDetails.users);
  const handleRegisterUser = () => {
   const  isUserExist = userData.some(
      user =>
        user.email === userCreateData.email ,
    );
    if (
      !userCreateData.password ||
      !userCreateData.confirmPassword ||
      userCreateData.password !== userCreateData.confirmPassword
    ) {
      Alert.alert('Password does not match');
    }else if(isUserExist){
      Alert.alert('User already exist !!');
    } 
    else {
      delete userCreateData.confirmPassword;
      dispatch(createUser(userCreateData));
      navigation.navigate('Login');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Asset.bgImage1} style={styles.bgImage}>
        <View style={styles.headerLogin}>
          <Text style={styles.loginText}>Register</Text>
          <Text style={{color: 'purple'}}>Create an account</Text>
        </View>
        <View style={styles.loginData}>
          <TextInput
            placeholder="Username"
            style={styles.textInput}
            maxLength={200}
            width="100%"
            value={userCreateData.userName}
            name="name"
            onChangeText={text => handleOnChange('userName', text)}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={userCreateData.email}
            keyboardType="email-address"
            name="email"
            onChangeText={text => handleOnChange('email', text)}
          />
          <TextInput
            placeholder="Phone Number"
            style={styles.textInput}
            value={userCreateData.phone}
            keyboardType="numeric"
            name="phone"
            onChangeText={text => handleOnChange('phone', text)}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
            value={userCreateData.password}
            name="password"
            onChangeText={text => handleOnChange('password', text)}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={userCreateData.confirmPassword}
            style={styles.textInput}
            onChangeText={text => handleOnChange('confirmPassword', text)}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => handleRegisterUser()}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                padding: 5,
              }}>
              Create Account
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', top: '22%'}}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: 'purple'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  headerLogin: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'purple'
  },
  loginText: {
    fontSize: 35,
    color: 'purple',
    fontWeight: 'bold',
  },
  loginData: {
    height: '90%',
    backgroundColor: 'white',
    padding: 60,
    borderTopLeftRadius: 150,
    alignItems: 'center',
  },
  welcome: {
    color: 'purple',
    fontSize: 25,
    marginTop: '10%',
  },
  loginAcc: {
    fontSize: 16,
  },
  textInput: {
    borderRadius: 100,
    backgroundColor: 'lightgrey',
    width: '100%',
    marginTop: '5%',
    paddingLeft: 10,
  },
  loginButton: {
    top: '10%',
    width: '90%',
    backgroundColor: 'purple',
    borderRadius: 100,
  },
  bgImage: {
    resizeMode: 'contain',
  },
});

export default Register;
