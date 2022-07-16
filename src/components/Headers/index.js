import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {windowWidth} from '../../utils/Dimension';
import {COLORS} from '../../utils';
import {ms} from 'react-native-size-matters';

function Headers({onPress, title, type}) {
  if (type === 'back-title') {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon name="arrow-left" size={24} color="black" />
        <Text style={styles.titleBack}>{title}</Text>
      </TouchableOpacity>
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
    height: ms(50),
    alignItems: 'center',
  },

  titleBack: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    flex: 1,
    marginRight: ms(50),

    zIndex: 1,
  },
});
