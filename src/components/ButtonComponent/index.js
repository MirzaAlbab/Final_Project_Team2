import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, fonts} from '../../utils';

const ButtonComponent = ({title, onPress, disable}) => {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[disable ? styles.container2 : styles.container]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purple,
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 16,
    height: 50,
  },
  container2: {
    backgroundColor: COLORS.brown,
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 16,
    height: 50,
  },
  title: {
    fontFamily: fonts.Poppins[500],
    letterSpacing: 2,
    lineHeight: 20,
    textAlign: 'center',
    color: COLORS.white,
  },
});
