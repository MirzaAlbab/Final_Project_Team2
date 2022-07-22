import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
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

const Home = ({navigation}) => {
  const [data, setData] = useState({});
  const [category, setCategory] = useState([]);
  const getProduct = async () => {
    try {
      const res = await axios.get(`${API_URL}/buyer/product`);
      console.log(res.data, 'data resgggg');
      setData(res.data);
      setCategory(res.data.Categories[0].name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log('haolo dara', data);

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <CardBarang2
          image={item?.image_url}
          title={item?.name}
          category={category ? category : 'category'}
          price={item?.base_price}
          onPress={() => navigation.navigate('Buyer', {id: item.id})}
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
          <Gap height={86} />
          <Text style={styles.textDiskon}>Diskon Hingga</Text>
          <Text style={styles.textPersen}>600%</Text>
          <Image source={gift} resizeMode={'cover'} style={styles.image} />
        </View>
        <Gap height={48} />
        <View>
          <Text style={styles.textTitleKategory}>Telusuri Kategory</Text>
          <Gap height={16} />

          <View style={styles.buttonRow}>
            <Button title={'Semua'} />
            <Button title={'Hobi'} />
            <Button title={'Kendaraan'} />
          </View>
        </View>
        <Gap height={36} />

        <View>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={RenderItem}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  container: {
    position: 'absolute',
    width: wp('100%'),
    height: ms(398),
    left: ms(0),
    top: ms(0),
  },
  input: {top: ms(38)},
  textGlobal: {},
  textHeader: {
    fontFamily: fonts.Poppins['700'],
    lineHeight: ms(30),
    fontSize: ms(20),
    fontStyle: 'normal',
    color: COLORS.darkBrown,
    position: 'absolute',
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
    width: ms(123),
    left: ms(239),
    opacity: 0.8,
    position: 'absolute',
  },
});
