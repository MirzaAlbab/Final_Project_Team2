import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {COLORS, fonts} from '../../../utils';
import Gap from '../../Gap';
import people from '../../../assets/images/people.png';

const CardBarang2 = ({title, category, price, image}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={image ? {uri: image} : people}
          resizeMode={'cover'}
          style={styles.image}
        />
        <Gap height={10} />
        <Text style={styles.title}>{title ? title : 'title'}</Text>
        <Text style={styles.category}>{category ? category : 'catekgory'}</Text>
        <Text style={styles.price}>Rp {price ? price : 'price'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CardBarang2;

const styles = StyleSheet.create({
  container: {
    width: ms(170),
    height: ms(220),
    marginHorizontal: ms(10),
    marginVertical: ms(10),
    alignContent: 'center',
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
    marginHorizontal: ms(10),
    marginVertical: ms(5),
  },
  category: {
    fontFamily: fonts.Poppins['400'],
    color: COLORS.gray,
    fontStyle: 'normal',
    lineHeight: ms(14),
    marginHorizontal: ms(10),
    marginVertical: ms(5),
  },
  price: {
    fontFamily: fonts.Poppins['400'],
    color: COLORS.darkBrown,
    fontStyle: 'normal',
    lineHeight: ms(20),
    marginHorizontal: ms(10),
    marginVertical: ms(5),
  },
  image: {
    height: ms(100),
    width: ms(140),
    borderRadius: ms(4),
    marginVertical: ms(5),
    marginHorizontal: ms(10),
    alignSelf: 'center',
  },
});
