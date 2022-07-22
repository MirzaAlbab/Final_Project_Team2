import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {ms} from 'react-native-size-matters';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CardBarangInfo from '../../components/Card/CardBarangInfo';
import CardInfoWithImage from '../../components/Card/CardInfoWithImage';
import {COLORS} from '../../utils';
import {fonts} from '../../utils';
import ButtonComponent from '../../components/ButtonComponent';
import ActionSheet from 'react-native-actions-sheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import Line from '../../components/Line';
import {InputComponent} from '../../components';
import axios from 'axios';
import {API_URL} from '@env';

const Buyer = () => {
  const [data, setData] = useState({});
  const [category, setCategory] = useState([]);
  const getProductByItem = async () => {
    try {
      const res = await axios.get(`${API_URL}/buyer/product/98`);
      console.log(res.data, 'data res');
      setData(res.data);
      setCategory(res.data.Categories[0].name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductByItem();
  }, []);

  const ActionRef = useRef();

  const showActionSheet = () => {
    ActionRef.current.show();
  };
  const hideActionSheet = () => {
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
            <View style={styles.containerInfo}>
              <View style={styles.containerInfoCard}>
                <CardInfoWithImage
                  image={data.image_url}
                  title={data.name}
                  price={data.base_price}
                />
              </View>
              <View style={styles.containerComponent}>
                <InputComponent
                  label={'Harga Tawar'}
                  placeholder={'Rp 0,00'}
                  keyboardType={'numeric'}
                />
                <ButtonComponent
                  title={'Kirim'}
                  onPress={() => Alert.alert('Kirim')}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ActionSheet>

      <Image
        source={{uri: data.image_url}}
        style={styles.image}
        resizeMode="cover"
      />

      <CardBarangInfo
        title={data.name}
        category={category}
        price={data.base_price}
      />

      <CardInfoWithImage
        image={data.User?.image_url}
        title={data.User?.full_name}
        city={data.location}
      />

      <View style={styles.containerDeskripsi}>
        <Text style={styles.title}>Deskripsi</Text>
        <Text style={styles.content}>{data.description}</Text>
        <ButtonComponent title={'Terbitkan'} onPress={showActionSheet} />
      </View>
    </View>
    // </View>
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
    top: ms(-30),
    paddingHorizontal: ms(32),
  },
  textHargaTawar: {
    fontFamily: fonts.Poppins['500'],
    fontStyle: 'normal',
    color: COLORS.black,
    lineHeight: ms(20),
    top: ms(42),
    paddingLeft: ms(29),
    width: ms(191),
    height: ms(20),
    position: 'absolute',
  },
  containerInfo: {
    top: ms(-250),
  },
  containerInfoCard: {right: ms(32)},
  containerComponent: {top: ms(480)},
  textInfo: {
    fontFamily: fonts.Poppins['400'],
    fontStyle: 'normal',
    color: COLORS.black,
    position: 'absolute',
    lineHeight: ms(20),
    top: ms(70),
    paddingHorizontal: 32,
    height: ms(60),
    textAlign: 'justify',
  },
  // backgroundColor: COLORS.black,
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
