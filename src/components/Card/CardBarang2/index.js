import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {COLORS, fonts} from '../../../utils';
import Gap from '../../Gap';
import people from '../../../assets/images/people.png';

const CardBarang2 = ({title, category, price, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={image ? {uri: image} : people}
        resizeMode={'cover'}
        style={styles.image}
      />
      <Gap height={20} />
      <Text style={styles.title}>{title ? title : 'title'}</Text>
      <Text style={styles.category}>{category ? category : 'catekgory'}</Text>
      <Text style={styles.price}>{price ? price : 'price'}</Text>
    </TouchableOpacity>
  );
};

export default CardBarang2;

const styles = StyleSheet.create({
  container: {
    width: ms(166),
    height: ms(216),
    // top: ms(398),
    marginHorizontal: ms(15),
    marginVertical: ms(10),
    backgroundColor: COLORS.white,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.84,
    elevation: 5,
    borderRadius: 4,
  },
  title: {
    fontFamily: fonts.Poppins['500'],
    fontStyle: 'normal',
    lineHeight: ms(14),
    color: COLORS.darkBrown,
    width: ms(190),
    height: ms(20),
    left: ms(8),
    position: 'absolute',
    top: ms(120),
  },
  category: {
    fontFamily: fonts.Poppins['400'],
    color: COLORS.gray,
    fontStyle: 'normal',
    position: 'absolute',
    lineHeight: ms(14),
    width: ms(140),
    height: ms(14),
    left: ms(8),
    top: ms(140),
  },
  price: {
    fontFamily: fonts.Poppins['400'],
    color: COLORS.darkBrown,
    fontStyle: 'normal',
    lineHeight: ms(20),
    position: 'absolute',
    width: ms(140),
    height: ms(20),
    left: ms(8),
    marginTop: ms(165),
  },
  image: {
    height: ms(100),
    width: ms(140),
    borderRadius: ms(4),
    flexGrow: 0,
    margin: ms(8),
  },
});
