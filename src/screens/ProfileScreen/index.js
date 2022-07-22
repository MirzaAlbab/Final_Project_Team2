/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import InputProfile from '../../components/InputProfile';
import {useEffect} from 'react';
import Gap from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import {showError} from '../../utils/ShowMessage';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import {ms} from 'react-native-size-matters';
import {fonts, COLORS} from '../../utils';
import ButtonComponent from '../../components/ButtonComponent';
import {InputComponent} from '../../components';
import {ILNullPhoto} from '../../assets/icons/images';
import Input from '../../components/Input';
import axios from 'axios';
import Headers from '../../components/Headers';
import {putDataProfile} from './redux/action';

import {BASE_URL} from '../../helpers/API';

import {moderateScale} from 'react-native-size-matters';
import {updateProfileSchema} from '../../utils/Validation';
import {useSelector, useDispatch} from 'react-redux';
import * as Yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';
import {kota} from '../../helpers/kota';
import ButtonCamera from '../../components/ButtonCamera';
import {setLoading} from '../redux/reducer/globalAction';
// import Profile2 from '../../components';

export default function ProfileScreen({navigation}) {
  const [User, setUser] = useState({
    full_name: '',
    city: '',
    address: '',
    phone_number: '',
    image: '',
  });
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(User?.image);
  const {user} = useSelector(state => state.login);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(kota);
  const [image, setImage] = useState('');
  // const [User, setUser] = useState({
  //   full_name: '',
  //   city: '',
  //   address: '',
  //   phone_number: '',
  //   image: '',
  // });

  useEffect(() => {
    getProfile();
    // console.log('User', User.image);
  }, [photo]);

  const getProfile = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/auth/user`, {
        headers: {access_token: `${user.access_token}`},
      });
      setUser({
        full_name: res.data.full_name,
        city: res.data.city,
        address: res.data.address,
        phone_number: res.data.phone_number,
        image: res.data.image_url,
      });
      setPhoto(res.data.image_url);
      setValue(res.data.city);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const putProfile = async values => {
    try {
      const body = new FormData();
      body.append('full_name', values.full_name);
      body.append('phone_number', values.phone_number);
      body.append('address', values.address);
      body.append('city', value);
      body.append('email', '');
      if (image.uri) {
        body.append('image', {
          uri: image.uri,
          name: image.fileName,
          type: image.type,
        });
        // dispatch(putDataProfile(body, navigation));
      }

      console.log(body, 'bebasss');
      console.log(user);
      const res = await fetch(`${BASE_URL}/auth/user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
          access_token: `${user.access_token}`,
        },
        body: body,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  // const changeProfilePhoto = async () => {
  //   await launchImageLibrary({mediaType: 'photo'}).then(image =>
  //     setImage(image.assets[0]),
  //   );
  // };

  const validationProfile = Yup.object().shape({
    full_name: Yup.string().required('Nama tidak boleh kosong'),
    address: Yup.string().required('Alamat tidak boleh kosong'),
    phone_number: Yup.string().required('No. Handphone tidak boleh kosong'),
  });

  const getImage = () => {
    launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
        includeBase64: true,
      },
      response => {
        // console.log('response : ', response);
        if (response.didCancel || response.error) {
          showError('Sepertinya anda tidak memilih fotonya');
        } else {
          const source = response?.assets[0];
          // console.log('response GetImage : ', source);

          const Uri = source.uri;
          setPhoto(Uri);
          setImage(source);

          console.log(Uri, 'Ini photo');
        }
      },
    );
  };

  // const kota = [
  //   'Ambon',
  //   'Balikpapan',
  //   'Banda Aceh',
  //   'Bandar Lampung',
  //   'Bandung',
  //   'Banjar',
  //   'Banjarbaru',
  //   'Banjarmasin',
  //   'Batam',
  //   'Batu',
  //   'Baubau',
  //   'Bekasi',
  //   'Bengkulu',
  //   'Bima',
  //   'Binjai',
  //   'Bitung',
  //   'Blitar',
  //   'Bogor',
  //   'Bontang',
  //   'Bukittinggi',
  //   'Cilegon',
  //   'Cimahi',
  //   'Cirebon',
  //   'Denpasar',
  //   'Depok',
  //   'Dumai',
  //   'Gorontalo',
  //   'Gunungsitoli',
  //   'Jakarta Barat',
  //   'Jakarta Pusat',
  //   'Jakarta Selatan',
  //   'Jakarta Timur',
  //   'Jakarta Utara',
  //   'Jambi',
  //   'Jayapura',
  //   'Kediri',
  // ];

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationProfile}
        initialValues={User}
        enableReinitialize={true}
        onSubmit={putProfile}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => {
          return (
            <View>
              <Headers
                title={'Lengkapi Info Akun'}
                type={'back-title'}
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <View style={styles.contentContainer}>
                <ButtonCamera onPress={getImage} url={photo} />

                <InputProfile
                  inputName="Nama*"
                  placeholder="Nama Lengkap"
                  onChangeText={handleChange('full_name')}
                  onBlur={handleBlur('full_name')}
                  value={values.full_name}
                />
              </View>
              {touched.full_name && errors.full_name && (
                <Text style={styles.errorValidation}>{errors.full_name}</Text>
              )}

              <View style={styles.contentContainer}>
                <Text style={styles.kota}>Kota*</Text>
                <DropDownPicker
                  style={styles.dropdownPicker}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </View>
              <View style={styles.contentContainer2}>
                <InputProfile
                  inputName="Alamat*"
                  placeholder="Contoh: Jalan Manggala 2"
                  multiline={true}
                  numberOfLines={4}
                  styleInput={styles.alamatContainer}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                />
              </View>

              {touched.address && errors.address && (
                <Text style={styles.errorValidation}>{errors.address}</Text>
              )}
              <View style={styles.contentContainer2}>
                <InputProfile
                  keyboardType={'numeric'}
                  inputName="No Handphone*"
                  onChangeText={handleChange('phone_number')}
                  onBlur={handleBlur('phone_number')}
                  value={values.phone_number}
                />
              </View>

              {touched.phone_number && errors.phone_number && (
                <Text style={styles.errorValidation}>
                  {errors.phone_number}
                </Text>
              )}

              <View style={styles.btnSimpan}>
                <ButtonComponent title={'Simpan'} onPress={handleSubmit} />
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

// export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    // margin: 12,
  },
  alamatContainer: {height: moderateScale(100), textAlignVertical: 'top'},
  errorValidation: {
    marginLeft: ms(15),
    color: 'red',
    marginBottom: ms(10),
  },
  contentContainer: {
    marginHorizontal: ms(10),
  },
  btnSimpan: {
    marginTop: ms(19),
    width: ms(300),
    alignSelf: 'center',
  },
  contentContainer2: {
    marginTop: ms(10),
    marginHorizontal: ms(10),
  },
  dropdownPicker: {
    width: ms(310),
    marginLeft: ms(18),
    // backgroundColor: COLORS.white,
    borderColor: COLORS.black,

    borderRadius: ms(10),
  },
  kota: {
    // color: COLORS.black,
    // marginStart: moderateScale(5),
    // fontFamily: 'Poppins-SemiBold',
    marginTop: ms(10),
    fontSize: moderateScale(15),
    // color: 'yellow',
    fontFamily: fonts.Poppins['700'],
    marginLeft: ms(19),
    color: COLORS.black,
  },
  imageContainer: {
    alignItems: 'center',
  },
});
