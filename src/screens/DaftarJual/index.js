import {Text, Image, StyleSheet, View, FlatList, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardBarang2 from '../../components/Card/CardBarang2';
import {ms} from 'react-native-size-matters';
import Headers from '../../components/Headers';
import {COLORS, fonts} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BASE_URL} from '../../helpers/API';
import {setUser} from '../Login/redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
const DaftarJual = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const {user} = useSelector(state => state.login);
  const [image, setImage] = useState('');
  const [filter, setFilter] = useState('produk');
  const getSellerProduct = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/seller/product`, {
        headers: {
          access_token: `${user}`,
        },
      });
      console.log(res.data, 'data');
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getImage = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/auth/user`, {
        headers: {access_token: `${user}`},
      });
      console.log(res.data);

      setImage(res.data.image_url);
      console.log(image);
    } catch (error) {
      // console.log(error);
      if ((error.message = 'Request failed with status code 401')) {
        await AsyncStorage.setItem('@access_token', '');
        Alert.alert('Pemberitahuan', 'Login dulu ', [
          {
            text: 'OK',
            onPress: () => {
              dispatch(setUser(''));
              navigation.navigate('Login');
            },
          },
        ]);
      }
    }
  };
  const getOrder = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/seller/order`, {
        headers: {
          access_token: `${user}`,
          status: 'pending',
        },
      });
      console.log(res.data, 'data');
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getImage();
    if (filter === 'produk') {
      getSellerProduct();
    } else {
      getOrder();
    }
  });
  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity>
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
    <View style={styles.container}>
      <Headers title="Daftar Jual Saya" />

      <View style={styles.card}>
        <View style={styles.onContainer}>
          <Image
            source={{uri: image}}
            resizeMode={'cover'}
            style={styles.peopleImage}
          />
          <View>
            <Text style={styles.sellerName}>Seller 1</Text>
            <Text style={styles.city}>Palembang</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.editbutton}
              onPress={() =>
                navigation.navigate('Profile', {
                  imageProfile: '',
                })
              }>
              <Text style={styles.edittext}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerList}>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.textList}>Produk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filter}
          onPress={() => setFilter('diminati')}>
          <Text style={styles.textList}>Diminati</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.textList}>Terjual</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Jual')}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.rectangle}>
            <Ionicons style={styles.addicon} name="add" size={30} />
            <Text style={styles.icontext}>Add Image</Text>
          </View>
        </View>
      </TouchableOpacity>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={RenderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: ms(10),
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
    width: ms(69),
    height: ms(20),
    alignSelf: 'stretch',
  },
  city: {
    fontFamily: fonts.Poppins['400'],
    lineHeight: ms(14),
    color: COLORS.gray,
    left: ms(16),
    alignSelf: 'stretch',
    width: ms(69),
    height: ms(14),
  },

  card: {
    marginTop: ms(10),
    marginBottom: ms(10),
    borderRadius: ms(10),
    backgroundColor: COLORS.white,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.84,
    elevation: 5,
    padding: ms(16),
    paddingTop: ms(20),
  },
  editbutton: {
    backgroundColor: COLORS.white,
    borderRadius: ms(10),
    padding: ms(8),
    paddingHorizontal: ms(12),
    marginLeft: ms(150),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.84,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(10),
    marginBottom: ms(10),
  },
  filter: {
    backgroundColor: COLORS.purple,
    borderRadius: ms(10),
    padding: ms(8),
    paddingHorizontal: ms(12),

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.84,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(10),
    marginBottom: ms(10),
  },
  edittext: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(14),
    color: COLORS.darkBrown,
    fontSize: ms(12),
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  rectangle: {
    width: ms(150),
    height: ms(200),
    backgroundColor: COLORS.white,
    marginTop: ms(10),
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 5,
    marginBottom: ms(10),
  },
  addicon: {
    marginTop: ms(70),
    alignSelf: 'center',
  },
  icontext: {
    marginBottom: ms(50),
    alignSelf: 'center',
  },
  productImage: {
    height: ms(100),
    width: ms(140),
    borderRadius: ms(10),
    alignSelf: 'center',
    marginTop: ms(10),
    marginBottom: ms(10),
    marginLeft: ms(10),
    marginRight: ms(10),
  },
  productname: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(14),
    color: COLORS.darkBrown,
    fontSize: ms(12),
    alignSelf: 'stretch',

    marginTop: ms(5),
    marginBottom: ms(5),
    marginLeft: ms(15),
    marginRight: ms(5),
  },
  productcategory: {
    fontFamily: fonts.Poppins['400'],
    lineHeight: ms(14),
    color: COLORS.gray,
    fontSize: ms(12),
    alignSelf: 'stretch',

    marginTop: ms(5),
    marginBottom: ms(5),
    marginLeft: ms(15),
    marginRight: ms(5),
  },
  productprice: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(14),
    color: COLORS.darkBrown,
    fontSize: ms(12),
    alignSelf: 'stretch',
    marginTop: ms(5),
    marginBottom: ms(5),
    marginLeft: ms(15),
    marginRight: ms(5),
  },
  productcard: {
    marginTop: ms(10),
    marginBottom: ms(10),
    borderRadius: ms(10),
    backgroundColor: COLORS.white,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.84,
    elevation: 5,
  },
  containerList: {
    marginTop: ms(10),
    marginBottom: ms(10),
    borderRadius: ms(10),
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: ms(16),
  },
  textList: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(14),
    color: COLORS.white,
    fontSize: ms(12),
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});

export default DaftarJual;
