import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  TextInput
} from 'react-native';
import firebase from 'firebase';
import db from '../config'
import { Header } from 'react-native-elements';


export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email : '',
      password : ''
    }
  }
  handleLogin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      this.props.navigation.navigate("BottomTab")
    })
    .catch(error=>{
      alert(error.message)
    })
  }
  render() {
    const {email,password} = this.state;
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
<Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content" // or directly
 // leftComponent={<MyCustomLeftComponent />}
  centerComponent={{ text: 'Rock N Roll', style: { color: '#fff' , fontFamily : 'Cochin' , fontWeight : 'bold' , fontSize : 30} }}
  containerStyle={{
    backgroundColor: '#552f63',
    justifyContent: 'space-around',
    borderRadius : 30
  }}
/>
          <View style={styles.upperContainer}>
           
            <Image source={require("../assets/hp.png")} style={styles.appIcon}/>
          </View>
          <View style={styles.lowerContainer}>
           
              <TextInput
                style={styles.textinput}
                placeholder={"Enter E-mail Id"}
                placeholderTextColor={"#FFFFFF"}
                onChangeText={text => this.setState({ email: text })}
              //  autoFocus
              />
              <TextInput
                style={styles.textinput}
                placeholder={"Enter password"}
                placeholderTextColor={"#FFFFFF"}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleLogin(email,password)}
              >
                <Text style={styles.buttonText}> Login </Text>
              </TouchableOpacity>
            </View>
            
            </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#c09fcc' },
  bgImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
  upperContainer: { flex: 0.5, justifyContent: 'center', alignItems: 'center' },
  appIcon: { width: 280, height: 250, resizeMode: 'contain', marginTop: 80 },
  appName: { width: 130, height: 130, resizeMode: 'contain' },
  lowerContainer: { flex: 0.5, alignItems: 'center' },

  textinput: {
    width: '75%',
    height: 55,
    padding: 10,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
    backgroundColor: '#552f63',
  },
  button: {
    width: '43%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#983ab0',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
  },
});
