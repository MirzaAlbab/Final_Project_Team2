import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Akun = ({navigation}) => {
  return (
    <View>
      <Text>Akun</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Akun;
