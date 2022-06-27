import React from 'react';
import {StyleSheet, View} from 'react-native';

const Gap = ({height, width}) => {
  return <View style={styles.view(height, width)} />;
};

export default Gap;

const styles = StyleSheet.create({
  view: (height, width) => ({
    height: height,
    width: width,
  }),
});
