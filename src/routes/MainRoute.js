import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import BottomTabs from './BottomTabs';
import Buyer from '../screens/buyer';
import ProfileScreen from '../screens/ProfileScreen';
import PengaturanScreen from '../screens/PengaturanScreen';

const Stack = createStackNavigator();
export default function MainRoute() {
  return (
    <Stack.Navigator
      initialRouteName="Buyer"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Dashboard" component={BottomTabs} />
      <Stack.Screen name="PengaturanScreen" component={PengaturanScreen} />
      <Stack.Screen name="Buyer" component={Buyer} />
    </Stack.Navigator>
  );
}
