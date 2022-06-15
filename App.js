import {View, Text} from 'react-native';
import React from 'react';
import {API_URL} from '@env';
export default function App() {
  return (
    <View>
      <Text>{API_URL}</Text>
    </View>
  );
}
