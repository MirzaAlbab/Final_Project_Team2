/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {cameraPic} from '../../assets';
import {setUser} from '../Login/redux/action';
import {setLoading} from '../redux/reducer/globalAction';
import {navigate} from '../../helpers/navigate';
// import {API_URL} from '@env';
import {logout} from '../Login/redux/action';
import axios from 'axios';
import ButtonCamera from '../../components/ButtonCamera';
import {BASE_URL} from '../../helpers/API';
import {useIsFocused} from '@react-navigation/native';

function Akun({navigation}) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(image !== null ? image : ILNullPhoto);

  // const [photo, setPhoto] = useState(ILNullPhoto);
  const {user} = useSelector(state => state.login);
  const isFocused = useIsFocused();
  const onLogout = () => {
    dispatch(logout(null));
    navigation.replace('Login');
  };

  const getImage = async () => {
    try {
      dispatch(setLoading(true));
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
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getImage();
    console.log('ini image', image);
  }, [image, isFocused]);

  // const getImage = async () => {
  //   try {
  //     const res = await axios.get(`${BASE_URL}/auth/user`, {
  //       headers: {access_token: `${user}`},
  //     });
  //     console.log(res.data);
  //     setImage(res.data.image_url);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

      <Profile2
        image={
          image !== null
            ? image
            : 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_account_circle_48px-512.png'
        }
      />

      <View style={styles.form}>
        <ScrollView>
          <CardList
            type="account"
            name="edit"
            title="Ubah Akun"
            onPress={() =>
              navigation.navigate('Profile', {
                imageProfile: image,
              })
            }
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
