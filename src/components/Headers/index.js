import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {windowWidth} from '../../utils/Dimension';
import {COLORS, fonts} from '../../utils';
import {ms} from 'react-native-size-matters';

function Headers({onPress, title, type}) {
  if (type === 'back-title') {
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.tombolheader} onPress={onPress}>

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

    fontSize: ms(20),

    color: COLORS.black,

  },

  container: {
    flexDirection: 'row',
    width: windowWidth,
    height: ms(50),
    alignItems: 'center',
  },

  titleBack: {
    fontFamily: fonts.Poppins['500'],
    fontSize: ms(14),
    color: 'black',
    textAlign: 'center',
    flex: 1,

    marginRight: ms(50),

    zIndex: 1,
    alignSelf: 'center',
  },
  tombolheader: {
    marginLeft: ms(20),

  },
});
