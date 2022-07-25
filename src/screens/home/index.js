/* eslint-disable no-dupe-keys */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ms} from 'react-native-size-matters';
import {COLORS, fonts} from '../../utils';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Button, Gap, InputComponent} from '../../components';
import CardBarang2 from '../../components/Card/CardBarang2';
import axios from 'axios';
import {API_URL} from '@env';
import gift from '../../assets/images/gift.png';
import {useSelector, useDispatch} from 'react-redux';
import {setLoading, setRefresh} from '../redux/reducer/globalAction';
import {BASE_URL} from '../../helpers/API';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {refresh} = useSelector(state => state.global);
  const [data, setData] = useState({});
  const {loading} = useSelector(state => state.global);
  // const [category, setCategory] = useState([]);
  const getProduct = async () => {
    try {
      dispatch(setLoading(true));
      const res = await axios.get(`${BASE_URL}/buyer/product`);
      console.log(res.data, 'data resgggg');
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Buyer', {id: item.id})}>
        <CardBarang2
          image={item?.image_url}
          title={item?.name}
          category={item?.Categories[0].name}
          price={item?.base_price}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerAll}>
      <View style={styles.container}>
        <Gap height={35} />
        <InputComponent placeholder={'Cari Disini'} />
        <View>
          <Text style={styles.textHeader}>Bulan Ramadhan Banyak Diskon</Text>
          <Text style={styles.textDiskon}>Diskon Hingga</Text>

          <Text style={styles.textPersen}>60%</Text>
          <Image source={gift} resizeMode={'cover'} style={styles.image} />
        </View>
        <Gap height={30} />
        <Text style={styles.textTitleKategory}>Telusuri Kategori</Text>
        <Gap height={16} />
        <View style={styles.buttonRow}>
          <Button title={'Semua'} />
          <Button title={'Hobi'} />
          <Button title={'Kendarcaan'} />
        </View>
      </View>
      {loading ? (
        <View style={styles.containerflat}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={RenderItem}
        />
      )}
      {/* {loading ? (

      ) : (
        <View style={styles.container}>
          <ActivityIndicator>
            <Text>Loading...</Text>
          </ActivityIndicator>
        </View>
      )} */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  containerflat: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    width: wp('100%'),
    marginVertical: ms(20),
  },
  input: {top: ms(38)},
  textGlobal: {},
  textHeader: {
    fontFamily: fonts.Poppins['700'],
    lineHeight: ms(30),
    fontSize: ms(20),
    fontStyle: 'normal',
    color: COLORS.darkBrown,
    width: ms(200),
    height: ms(60),
    left: ms(16),
  },
  textDiskon: {
    fontFamily: fonts.Poppins['400'],
    lineHeight: ms(14),
    fontSize: ms(10),
    fontStyle: 'normal',
    color: COLORS.darkBrown,
    width: ms(200),
    height: ms(14),
    left: ms(16),
  },
  textPersen: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(26),
    fontSize: ms(18),
    fontStyle: 'normal',
    color: COLORS.red,
    width: ms(200),
    height: ms(26),
    left: ms(16),
  },
  textTitleKategory: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(20),
    fontSize: ms(14),
    fontStyle: 'normal',
    color: COLORS.darkBrown,

    width: ms(200),
    height: ms(20),
    left: ms(16),
  },
  buttonRow: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  containerBarang: {
    top: ms(-120),
    // backgroundColor: COLORS.gray,
  },
  image: {
    height: ms(127),
    position: 'absolute',
    width: ms(123),
    left: ms(239),
    opacity: 0.8,
  },
});
