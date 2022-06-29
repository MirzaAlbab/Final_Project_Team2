import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, fonts} from '../../utils';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purple,
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 16,
  },
  title: {
    fontFamily: fonts.Poppins[500],
    letterSpacing: 5,
    lineHeight: 20,
    textAlign: 'center',
    color: COLORS.white,
  },
});
