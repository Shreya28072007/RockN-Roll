import React, { Component } from 'react';
import { View , StatusBar, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { RFValue } from 'react-native-responsive-fontsize';
import List from '../screens/List';
import SearchScreen from '../screens/SearchScreen';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
     
        <Tab.Navigator
        barStyle = {styles.bottomTabStyle}
        labeled = {false}
        
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'SearchScreen') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'List') {
              iconName = focused ? 'list' : 'list-outline';
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          },
        })}
        activeColor={'#ee8249'}
        inactiveColor={'gray'}>
         
          <Tab.Screen name="SearchScreen" component={SearchScreen} />
          <Tab.Screen name="List" component={List} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#5f1d91',
    height: '8%',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: 'hidden',
    position: 'absolute',
  },
  })
