import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import screen1 from './screens/screen1';
import screen2 from './screens/screen2'

//import AppHeader from './components/AppHeader';


import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View >
     <AppContainer/> 
     
    </View>
  );
}
var AppNavigator=createSwitchNavigator({
  screen1:screen1,
  screen2:screen2
  
})
const AppContainer=createAppContainer(AppNavigator)


