import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/register';
import BottomTabs from './BottomTabs';
import Buyer from '../screens/buyer';

const Stack = createStackNavigator();
export default function MainRoute() {
  return (
    <Stack.Navigator
      initialRouteName="Buyer"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Buyer" component={Buyer} />
      <Stack.Screen name="Dashboard" component={BottomTabs} />
    </Stack.Navigator>
  );
}
