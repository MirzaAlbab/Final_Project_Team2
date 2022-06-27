import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import Home from '../screens/Home';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderRadius: 25,
          height: 60,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            return <Feather name="home" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <MaterialCommunityIcons name="account" size={40} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
