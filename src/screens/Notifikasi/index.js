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
        headers: {access_token: `${user.access_token}`},
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
        Alert.alert(
          'Pemberitahuan',
          'Token Sudah Expired, silahkan Login kembali!',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Login');
                dispatch(setUser(''));
              },
            },
          ],
        );
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
    <View style={styles.container}>
      <View style={styles.header}>
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

// const Notifikasi = () => {
//   const [refreshing, setRefreshing] = useState(false);
//   const dispatch = useDispatch();
//   const {user} = useSelector(state => state.login);
//   const dataNotif = useSelector(state => state.dataNotifikasi);

//   useEffect(() => {
//     dispatch(getNotifikasi());
//   }, []);

//   // const _onNotifikasi = async values => {
//   //   try {
//   //     const res = await axios.get(`${API_URL}/notification`);

//   //     dispatch(getNotifikasi(res.data));
//   //     console.log(res.data);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   const onRefresh = () => {
//     setRefreshing(true);
//     dispatch(getNotifikasi());
//     setRefreshing(false);
//   };

//   const renderItem = ({item}) => (
//     <CardList
//       source={{uri: item.image_url}}
//       status={item.status}
//       type="notif"
//       date={item.createdAt}
//       harga={item.base_price}
//       hargaNego={item.bid_price}
//       name={item.product_name}
//       read={item.read}
//     />
//   );
//   return (
//     <View style={styles.pages}>
//       <Headers title="Notifikasi" />

//       <FlatList
//         data={dataNotif.notifikasi}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         showsVerticalScrollIndicator={false}
//         maxToRenderPerBatch={5}
//         initialNumToRender={5}
//         removeClippedSubviews
//         refreshing={refreshing}
//         onRefresh={() => onRefresh()}
//       />
//     </View>
//   );
// };

// export default Notifikasi;

// const styles = StyleSheet.create({
//   pages: {
//     flex: 1,
//     margin: 16,
//   },
// });
