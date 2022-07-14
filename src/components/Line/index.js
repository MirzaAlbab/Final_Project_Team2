import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {COLORS} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Line = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.line} />
    </TouchableOpacity>
  );
};

export default Line;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  line: {
    width: ms(60),
    height: ms(6),
    alignSelf: 'center',
    top: ms(3),
    backgroundColor: COLORS.LightGray2,
    borderRadius: ms(20),
  },
});
