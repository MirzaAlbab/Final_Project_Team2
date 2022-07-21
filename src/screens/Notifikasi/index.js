import {StyleSheet, View, FlatList} from 'react-native';
// import {API_URL} from '@env';
import Headers from '../../components/Headers';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import axios from 'axios';
import CardList from '../../components/CardList';

import {setNotifikasi} from './action';

const Notifikasi = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const dataNotif = useSelector(state => state.dataNotifikasi);

  useEffect(() => {}, []);

  // const _onNotifikasi = async values => {
  //   try {
  //     const res = await axios.get(`${API_URL}/notification`);

  //     dispatch(setNotifikasi(res.data));
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(setNotifikasi());
    setRefreshing(false);
  };

  const renderItem = ({item}) => (
    <CardList
      source={{uri: item.image_url}}
      status={item.status}
      type="notif"
      date={item.createdAt}
      harga={item.base_price}
      hargaNego={item.bid_price}
      name={item.product_name}
      read={item.read}
    />
  );
  return (
    <View style={styles.pages}>
      <Headers title="Notifikasi" />

      <FlatList
        data={dataNotif.notifikasi}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        removeClippedSubviews
        refreshing={refreshing}
        onRefresh={() => onRefresh()}
      />
    </View>
  );
};

export default Notifikasi;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    margin: 16,
  },
});
