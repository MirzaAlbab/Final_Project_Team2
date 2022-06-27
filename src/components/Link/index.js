import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, fonts} from '../../utils';

const Link = ({title, onPress, size, align}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    textAlign: align,
    color: COLORS.purple,
    fontFamily: fonts.Poppins['700'],
    fontStyle: 'normal',
  }),
});
