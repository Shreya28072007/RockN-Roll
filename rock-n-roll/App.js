import React,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';
import { Header } from 'react-native-elements';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import BottomTabNavigator from "./components/bottomTabNavigator";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import LoginScreen from './screens/login';
import db from './config';
import firebase from 'firebase';

export default class App extends Component{
constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }


  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return  <AppContainer/>;
    }
    return null;
  }}
  const AppSwitchNavigator = createSwitchNavigator({
  Login : {
    screen : LoginScreen
  },
  BottomTab :{
    screen : BottomTabNavigator
  }
},
{
  initialRouteName : "Login"
}
)
const AppContainer = createAppContainer(AppSwitchNavigator);