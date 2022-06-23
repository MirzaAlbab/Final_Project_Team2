import {View, Text} from 'react-native';
import React from 'react';
import {API_URL} from '@env';
import Router from './src/router';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    // // <View>
    // //   {/* <Text>{API_URL}</Text> */}

    // </View>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
