import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import Register from '../screens/register';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen" headerMode="none">
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
