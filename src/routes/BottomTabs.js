import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Notifikasi from '../screens/Notifikasi';
import Jual from '../screens/jual';
import DaftarJual from '../screens/DaftarJual';
import Akun from '../screens/akun';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ms} from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Jual"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7126b5',
        tabBarLabelStyle: {
          fontSize: ms(10),
          marginBottom: ms(4),
        },
        tabBarStyle: {
          margin: 0,
          padding: 0,
          paddingVertical: 8,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={ms(18)} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{
          title: 'Notifikasi',
          tabBarIcon: ({color}) => (
            <Ionicons
              name="notifications-outline"
              color={color}
              size={ms(18)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Jual"
        component={Jual}
        options={{
          title: 'Jual',
          tabBarIcon: ({color}) => (
            <Ionicons name="add-circle-outline" color={color} size={ms(18)} />
          ),
        }}
      />
      <Tab.Screen
        name="DaftarJual"
        component={DaftarJual}
        options={{
          title: 'Daftar Jual',
          tabBarIcon: ({color}) => (
            <Ionicons name="list-outline" color={color} size={ms(18)} />
          ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={Akun}
        options={{
          title: 'Akun',
          tabBarIcon: ({color}) => (
            <Feather name="user" color={color} size={ms(18)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
