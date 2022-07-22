import React from 'react';
import MainRoute from './MainRoute';
import {NavigationContainer} from '@react-navigation/native';
export default function Root() {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
}
