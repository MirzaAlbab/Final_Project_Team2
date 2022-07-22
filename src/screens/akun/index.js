import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CardList from '../../components/CardList';
import Headers from '../../components/Headers';
// import NotLogin from '../../components/NotLogin';
// import ProfileScreen from '../ProfileScreen';
import {Profile2} from '../../components';
// import {Fade, Placeholder, PlaceholderMedia} from 'rn-placeholder';
import {version} from '../../../package.json';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import {ILNullPhoto} from '../../assets';
// import {setUser} from '../Login/redux/action';
// import {navigate} from '../../helpers/navigate';
// import {API_URL} from '@env';
import {logout} from '../Login/redux/action';
import axios from 'axios';
import {BASE_URL} from '../../helpers/API';

function Akun({navigation}) {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(ILNullPhoto);
  const {user} = useSelector(state => state.login);

  const onLogout = () => {
    dispatch(logout());
    navigation.replace('Login');
  };

  useEffect(() => {
    getImage();
  });

  const getImage = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/auth/user`, {
        headers: {access_token: `${user}`},
      });
      console.log(res.data);
      setPhoto(res.data.image_url);
    } catch (error) {
      console.log(error);
    }
  };

  // const exit = () => {
  //   const backAction = () => {
  //     Alert.alert('Hold on!', 'Do you want to exit the application?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'YES', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // };

  // useEffect(() => {
  //   exit();
  // }, []);

  // const logout = () => {
  //   Alert.alert('Hold on!', 'Do you want to logout?', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => null,
  //     },
  //     {
  //       text: 'YES',
  //       onPress: () => {
  //         dispatch(setUser({}));
  //         navigate('Home');
  //       },
  //     },
  //   ]);
  // };

  // const pengaturanAkun = () => null;
  // const ubahAkun = () => navigate('Profile');
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
            // onPress={() => navigation.navigate('Login')}
            onPress={onLogout}
          />
          {/* <CardList
            type="account"
            name="logout"
            title="Keluar"
            onPress={onLogout}
          /> */}
          {/* <MenuAkun nameIcon="log-out" menuName="Keluar" onPress={logout} /> */}
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
