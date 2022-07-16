import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import jam from '../../assets/images/jam.png';
import {ms} from 'react-native-size-matters';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CardInfoWithImage from '../../components/Card/CardInfoWithImage';
import CardBarangInfo from '../../components/Card/CardBarangInfo';
import people from '../../assets/images/people.png';
import {COLORS, fonts} from '../../utils';
import Button from '../../components/Button';
import ActionSheet from 'react-native-actions-sheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import Line from '../../components/Line';
import {InputComponent} from '../../components';
import axios from 'axios';
import {API_URL} from '@env';

const Buyer = () => {
  const [data, setData] = useState({});
  const getProductByItem = async () => {
    try {
      const res = await axios.get(`${API_URL}/buyer/product/1493`);
      console.log(res.data, 'data res');
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductByItem();
  });

  const ActionRef = useRef();
  const showActionSheet = () => {
    ActionRef.current.show();
  };
  console.log(data, 'dataa luar');
  const hideActionSheet = () => {
    console.log('hide');
    Alert.alert('hide');
    ActionRef.current.hide();
  };

  return (
    <View style={styles.container}>
      <ActionSheet ref={ActionRef}>
        <SafeAreaView style={styles.containerActionSheet}>
          <Line onPress={hideActionSheet} />
          <View style={styles.containerContent}>
            <Text style={styles.textHargaTawar}>Masukkan Harga Tawarmu </Text>
            <Text style={styles.textInfo}>
              Harga tawaranmu akan diketahui penual, jika penjual cocok kamu
              akan segera dihubungi penjual
            </Text>

            <View style={{top: ms(-250)}}>
              <View style={{marginLeft: ms(-32)}}>
                <CardInfoWithImage
                  image={jam}
                  title={'jama tangan Casino'}
                  price={'Rp. 250.000'}
                />
              </View>
              <View style={{top: ms(480)}}>
                <InputComponent
                  label={'Harga Tawar'}
                  placeholder={'Rp 0,00'}
                  keyboardType={'numeric'}
                />
                <Button title={'Kirim'} onPress={() => Alert.alert('Kirim')} />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ActionSheet>
      <View>
        <Image source={jam} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.containerComponents}>
        <View>
          <CardBarangInfo
            title={'Jam Casino'}
            category={'Aksesoris'}
            price={'Rp. 250.000'}
          />
        </View>
        <View>
          <CardInfoWithImage
            image={people}
            title={'Team 2'}
            city={'Online City'}
          />
        </View>

        <View style={styles.containerDeskripsi}>
          <Text style={styles.title}>Deskripsi</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, qu
          </Text>
          <Button
            title={'Saya tertarik dan ingin nego'}
            onPress={showActionSheet}
          />
        </View>
      </View>
    </View>
  );
};
export default Buyer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerActionSheet: {
    width: wp('100%'),
    height: ms(422),
    left: 0,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: ms(16),
    borderTopRightRadius: ms(16),
    position: 'relative',
  },
  containerContent: {
    // maxWidth: wp(84),
    top: ms(-30),
    paddingHorizontal: ms(32),
  },
  textHargaTawar: {
    fontFamily: fonts.Poppins['500'],
    fontStyle: 'normal',
    color: COLORS.black,
    lineHeight: ms(20),
    top: ms(42),
    // paddingHorizontal: 5,
    left: ms(32),

    width: ms(191),
    height: ms(20),
    position: 'absolute',
  },

  textInfo: {
    fontFamily: fonts.Poppins['400'],
    // backgroundColor: COLORS.black,

    fontStyle: 'normal',
    color: COLORS.black,
    position: 'absolute',
    lineHeight: ms(20),
    top: ms(70),
    paddingHorizontal: 32,
    height: ms(60),
    textAlign: 'justify',
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
