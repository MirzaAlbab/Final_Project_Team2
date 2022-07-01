import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import jam from '../../assets/images/jam.png';
import {ms} from 'react-native-size-matters';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CardBarangInfo from '../../components/Card/CardBarang';
import CardSeller from '../../components/Card/CardSeller';
import people from '../../assets/images/people.png';
import {COLORS, fonts} from '../../utils';
import Button from '../../components/Button';

const Buyer = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={jam} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.containerComponents}>
        <View>
          <CardBarangInfo
            title={'Jam Tangan Casino'}
            category={'Aksesoris'}
            price={'Rp. 250.000'}
          />
        </View>
        <View>
          <CardSeller
            imageSeller={people}
            seller={'Team 2'}
            city={'Online City'}
          />
        </View>

        <View style={styles.containerDeskripsi}>
          <Text style={styles.title}>Deskripsi</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Button
            title={'Saya tertarik dan ingin nego'}
            onPress={() => Alert.alert('Saya Tertarik')}
          />
        </View>
      </View>
    </View>
  );
};

export default Buyer;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    flex: 1,
  },
  containerComponents: {maxWidth: wp('92%')},
  image: {
    position: 'absolute',
    width: wp('100%'),
    height: ms(300),
    left: 0,
    top: 0,
  },
  containerDeskripsi: {
    width: wp('92%'),
    height: ms(225),
    top: ms(478),
    left: ms(16),
    position: 'absolute',
    padding: ms(16),
    backgroundColor: COLORS.white,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.84,
    elevation: 5,
    borderRadius: ms(16),
  },
  title: {
    fontFamily: fonts.Poppins['500'],
    fontStyle: 'normal',
    lineHeight: ms(20),
    color: COLORS.darkBrown,
    paddingBottom: ms(16),
  },
  content: {
    fontFamily: fonts.Poppins['400'],
    fontStyle: 'normal',
    lineHeight: ms(20),
    color: COLORS.gray,
    textAlign: 'justify',
    flex: 1,
  },
});
