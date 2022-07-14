import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardList from '../../components/CardList';
import Headers from '../../components/Headers';
import NotLogin from '../../components/NotLogin';
import ProfileScreen from '../ProfileScreen';
import {Profile2} from '../../components';
import {Fade, Placeholder, PlaceholderMedia} from 'rn-placeholder';
import {version} from '../../../package.json';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import {ILNullPhoto} from '../../assets';

function Akun({navigation}) {
  const [photo, setPhoto] = useState(ILNullPhoto);
  return (
    <View style={styles.pages}>
      <Headers title="Akun Saya" />
      <Profile2 source={photo} />
      <View style={styles.form}>
        <ScrollView>
          <CardList
            type="account"
            name="edit"
            title="Ubah Akun"
            onPress={() => navigation.navigate('Profile')}
          />
          <CardList
            type="account"
            name="setting"
            title="Pengaturan Akun"
            onPress={() => navigation.navigate('PengaturanScreen')}
          />
          <CardList
            type="account"
            name="logout"
            title="Keluar"
            onPress={() => navigation.navigate('Login')}
          />
          <Text style={styles.version}>Version {version}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

export default Akun;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 5,
  },

  version: {
    // fontFamily: fonts.Poppins.Regular,
    // fontSize: fontSize.small,
    // color: colors.text.subtitle,
    marginTop: 16,
    alignSelf: 'center',
  },

  placeholder: {
    // borderRadius: borderRadius.xlarge,
    width: windowWidth * 0.3,
    height: windowHeight * 0.15,
    alignSelf: 'center',
  },

  photoSection: {
    alignItems: 'center',
    marginVertical: 24,
  },
  form: {
    marginTop: 35,
  },
});
