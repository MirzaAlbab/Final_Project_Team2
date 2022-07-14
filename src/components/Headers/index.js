import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {windowWidth} from '../../utils/Dimension';

function Headers({onPress, title, type}) {
  if (type === 'back-title') {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{position: 'absolute'}} onPress={onPress}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleBack}>{title}</Text>
      </View>
    );
  }

  if (type === 'back') {
    return (
      <View style={styles.container} onPress={onPress}>
        <Icon name="arrow-left" size={24} color="black" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Headers;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'black',
  },

  container: {
    flexDirection: 'row',
    width: windowWidth,
    height: 50,
    alignItems: 'center',
  },

  titleBack: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
    zIndex: -1,
  },
});
