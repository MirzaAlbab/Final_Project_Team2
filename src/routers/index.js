import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/register';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Root;
