import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/register';
import BottomTabs from './BottomTabs';
import Buyer from '../screens/buyer';
import ProfileScreen from '../screens/ProfileScreen';
import PrevJual from '../screens/Prev-Jual';
import PengaturanScreen from '../screens/PengaturanScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword';

const Stack = createStackNavigator();
export default function MainRoute() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Dashboard" component={BottomTabs} />
      <Stack.Screen name="PengaturanScreen" component={PengaturanScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="Buyer" component={Buyer} />
      <Stack.Screen name="PrevJual" component={PrevJual} />
    </Stack.Navigator>
  );
}
