/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {setLoading} from '../redux/reducer/globalAction';
import {StyleSheet, View, FlatList, Alert, RefreshControl} from 'react-native';
import styles from './styles';
import {currencyToIDR, thisDate} from '../../helpers/changes';
// import {API_URL} from '@env';
import Headers from '../../components/Headers';
import {BASE_URL} from '../../helpers/API';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import CardList from '../../components/CardList';
import NotLogin from '../../components/NotLogin';

import {setUser} from '../Login/redux/action';
import Poppins from '../../components/FontComponent/Poppins';
import {setNotification, setRefreshing} from './redux/action';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemCardNotification from '../../components/ItemCardNotification';

const Notification = ({navigation}) => {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.login);
  // const {refreshing} = useSelector(state => state.daftarjual);
  const [notifikasi, setnotifikasi] = useState([]);

  useEffect(() => {
    getDataNotification();
  }, [getDataNotification]);

  const getDataNotification = useCallback(async () => {
    //OrderSeller
    try {
      dispatch(setLoading(true));
      const res = await axios.get(`${BASE_URL}/notification`, {
        headers: {access_token: `${user}`, notification_type: 'buyer'},
      });
      setnotifikasi([...res.data]);
      console.log('Data Notification: ', res.data);
      dispatch(setNotification(res.data));
      if (res.status === 200) {
        dispatch(setLoading(false));
        dispatch(setNotification(res.data));
      }
      if (res.status === 403) {
        setUser();
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));

      if ((error.message = 'Request failed with status code 401')) {
        await AsyncStorage.setItem('@access_token', '');
        Alert.alert('Pemberitahuan', 'Silahkan Login Terlebih Dahulu', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login');
              dispatch(setUser(''));
            },
          },
        ]);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }, [user, dispatch]);

  const onRefresh = () => {
    // dispatch(setRefreshing(true));
    dispatch(getDataNotification(user));
  };

  const renderDataNotification = ({item}) => (
    <ItemCardNotification
      typeNotif={item.notification_type}
      date={thisDate(item.transaction_date)}
      productName={item.product_name}
      productPrice={currencyToIDR(item.base_price)}
      tawaran={currencyToIDR(item.bid_price)}
      status={item.status}
    />
  );

  return (
    <View>
      <View>
        <Poppins style={styles.textHeader}>Notifikasi</Poppins>
        <View style={styles.containerNotifBar}>
          <FlatList
            // refreshControl={
            //   <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
            // }
            data={notifikasi}
            renderItem={renderDataNotification}
            keyExtractor={(_item, index) => index}
            numColumns={1}
            key={1}
            ListFooterComponent={<View style={styles.footerComponent} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Notification;

// const styles = StyleSheet.create({
//   header: {
//     // fontSize: 24,

//     // marginLeft: ms(20),
//     fontFamily: fonts.Poppins['700'],
//     fontSize: 24,
//     color: COLORS.black,
//     lineHeight: 36,
//     fontStyle: 'normal',
//     left: 12,
//   },
//   container: {
//     flexGrow: 1,
//     alignContent: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   inputBox: {
//     width: 300,
//     backgroundColor: 'rgba(255, 255,255,0.2)',
//     borderRadius: 25,
//     paddingHorizontal: 16,
//     fontSize: 16,
//     color: '#000',
//     marginVertical: 10,
//     borderColor: '#D0D0D0',
//     borderWidth: 1,
//   },
//   button: {
//     width: 300,
//     backgroundColor: '#7126B5',
//     borderRadius: 25,
//     marginVertical: 10,
//     paddingVertical: 13,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#ffffff',
//     textAlign: 'center',
//   },
//   form: {
//     // flexGrow: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',

//     paddingTop: ms(50),
//     paddingHorizontal: ms(30),
//   },
//   label: {
//     marginRight: ms(200),
//   },
//   labelem: {
//     marginRight: ms(220),
//   },
//   signupTextCont: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     flexDirection: 'row',
//   },
//   signupText: {
//     color: 'rgba(255,255,255,0.6)',
//     fontSize: 16,
//   },
//   signupButton: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   error: {
//     fontSize: 10,
//     color: 'red',
//     alignSelf: 'center',
//   },
//   account: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   text: {
//     fontFamily: fonts.Poppins['400'],
//     fontSize: 14,
//     color: COLORS.black,
//     textAlign: 'center',
//     lineHeight: ms(20),
//   },
// });
