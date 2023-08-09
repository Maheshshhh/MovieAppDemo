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
  Alert
} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import Asset from '../assets/Asset';
import databaseHandler from '../database/databaseHandler';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../state/action';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
     console.log('firstUseEffect');
    async function fetchData() {
      try {
        await databaseHandler.createTable();
      } catch (err) {
        console.log(' firstUseEffect error', err);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
     console.log('secondUseEffect');
    async function fetchData() {
      try {
        await dispatch(getUserDetails());
      } catch (err) {
        console.log('secondUseEffect error', err);
      }
    }
    fetchData();
  }, []);

  const registerValidation = async () => {
    if (username == '' || email =='' || phone =='' || password =='' || confirmPass =='') {
      Alert.alert("All Fields are Mandatory")
    } else {
      console.log('Validatefields');
      let userDetails = [
        {
          username: username,

          email: email,

          phone: phone,

          password: password,

          confirmPass: confirmPass,
        },
      ];
      try {
        await databaseHandler.insertUserDetailsData(userDetails);
      } catch (err) {
        console.log('err---', err);
      }
      Alert.alert("Account successfully created")
      navigation.navigate('Login')
    }
  };
  const validatePassword = () => {
    if (password !== confirmPass) {
      return false;
    }
    else {
      return true;
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Asset.bgImage1} style={styles.bgImage}>
        <View style={styles.headerLogin}>
          <Text style={styles.loginText}>Register</Text>
          <Text style={{color:'purple'}}>Create an account</Text>
        </View>
        <View style={styles.loginData}>
          <TextInput
            placeholder="Username"
            style={styles.textInput}
            maxLength={200}
            width="100%"
            value={username}
            onChangeText={text => {
              //setEventNameError(false)
              setUsername(text);
            }}
            // returnKeyType="next"
            // onSubmitEditing={() => {
            //   organizer_name.current.focus();
            // }}
            // blurOnSubmit={false}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            //ref={participant_Confirmmail}
            //placeholderTextColor="white"
            value={email}
            keyboardType='email-address'
            onChangeText={text => {
             // setConfirmEmailError(false);
              setEmail(text);
            }}
            // returnKeyType="next"
            // onSubmitEditing={() => {
            //   participant_major.current.focus();
            // }}
           // blurOnSubmit={false}
            // onBlur={() => {
            //   if (confirmEmail == '' || !validateConfirmEmail()) {
            //     setConfirmEmailError(true);
            //   }
            // }}
          />
          <TextInput
            placeholder="Phone Number"
            style={styles.textInput}
            //placeholderTextColor="white"
            value={phone}
            keyboardType='numeric'
            onChangeText={text => {
             // setConfirmEmailError(false);
              setPhone(text);
            }}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
            //placeholderTextColor="white"
            value={password}
            onChangeText={text => {
             // setConfirmEmailError(false);
              setPassword(text);
            }}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPass}
            style={styles.textInput}
            onChangeText={text => {
             // setConfirmEmailError(false);
              setConfirmPass(text);
            }}
            onBlur={() => {
                            if (confirmPass == '' || !validatePassword()) {
                             Alert.alert('Password does not match')
                            }
                          }}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => registerValidation()}>
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
