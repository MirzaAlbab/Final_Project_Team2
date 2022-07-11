import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {COLORS, fonts} from '../../../utils';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CardInfoWithImage = ({image, title, city, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.onContainer}>
        <Image
          source={{uri: image}}
          resizeMode={'cover'}
          style={styles.peopleImage}
        />
        <View>
          <Text style={styles.sellerName}>{title}</Text>
          <Text style={styles.city}>{city}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardInfoWithImage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: ms(16),
    position: 'absolute',
    height: ms(80),
    // marginLeft: ms(32),
    width: wp('92%'),
    left: ms(16),
    top: ms(379),
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

  onContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  peopleImage: {
    height: ms(48),
    width: ms(48),
    borderRadius: ms(12),
    flexGrow: 0,
  },
  sellerName: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(20),
    color: COLORS.darkBrown,
    left: ms(16),
    width: wp(69),
    height: ms(20),
    alignSelf: 'stretch',
  },
  city: {
    fontFamily: fonts.Poppins['400'],
    lineHeight: ms(14),
    color: COLORS.gray,
    left: ms(16),
    alignSelf: 'stretch',
    width: wp(69),
    height: ms(14),
  },
  price: {
    fontFamily: fonts.Poppins['400'],
    lineHeight: ms(14),
    left: ms(16),
    alignSelf: 'stretch',
    width: wp(69),
    height: ms(14),
    color: COLORS.black,
  },
});
