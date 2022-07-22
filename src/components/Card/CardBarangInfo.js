import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, fonts} from '../../utils';
import {ms} from 'react-native-size-matters';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CardBarangInfo = ({title, category, price}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.price}>Rp {price}</Text>
      </View>
    </View>
  );
};

export default CardBarangInfo;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: ms(16),
    width: wp('93'),
    height: ms(98),
    position: 'absolute',
    top: ms(266),
    left: ms(14),
    backgroundColor: COLORS.white,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.84,
    elevation: 5,
    borderRadius: 16,
  },
  title: {
    fontFamily: fonts.Poppins['500'],
    fontStyle: 'normal',
    lineHeight: ms(14),
    color: COLORS.darkBrown,
    width: ms(190),
    height: ms(20),
    left: ms(24),
    position: 'absolute',
    top: ms(10),
  },
  category: {
    fontFamily: fonts.Poppins['400'],
    color: COLORS.gray,
    fontStyle: 'normal',
    position: 'absolute',
    lineHeight: ms(14),
    width: ms(140),
    height: ms(14),
    left: ms(24),
    top: ms(40),
  },
  price: {
    fontFamily: fonts.Poppins['400'],
    color: COLORS.darkBrown,
    fontStyle: 'normal',
    lineHeight: ms(20),
    position: 'absolute',
    width: ms(140),
    height: ms(20),
    left: ms(24),
    top: ms(65),
  },
});
