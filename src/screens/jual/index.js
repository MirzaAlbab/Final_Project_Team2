import {StyleSheet, View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import DropdownComponent from '../../components/DropDownComponent';
// import DropdownSelect from './DropdownSelect';
import {launchImageLibrary} from 'react-native-image-picker';
import {showError} from '../../utils/ShowMessage';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import {InputComponent} from '../../components';
import Headers from '../../components/Headers';
import Gap from '../../components/Gap';
import ButtonCamera from '../../components/ButtonCamera';
import ButtonComponent from '../../components/ButtonComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import {API_URL} from '@env';
import {useSelector} from 'react-redux';
import {ACCESS_TOKEN} from '../../helpers/AccesTokenDumy';
import {ms} from 'react-native-size-matters';
import {COLORS} from '../../utils';
import {BASE_URL} from '../../helpers/API';
const Jual = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [value, setValue] = useState('');
  const [kategori, setKategori] = useState([]);
  const [image, setImage] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const {user} = useSelector(state => state.login);
  const {profile} = useSelector(state => state.profile);
  // const {user} = useSelector(state => state.login);

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
        }
      },
    );
  };
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    try {
      axios
        .get(`${BASE_URL}/seller/category`, {})
        .then(res => {
          setKategori(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log('err : ', err);
        });
    } catch (error) {
      console.log('error : ', error);
    }
  };

  const onSubmit = async values => {
    console.log(profile);
    console.log(values, 'values');
    const data = new FormData();
    data.append('name', values.namaproduk);
    await data.append('base_price', values.harga);
    data.append('description', values.deskripsi);
    data.append('category_ids', values.kategori.toString());
    data.append('location', 'ambon');
    data.append('image', {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    });
    console.log('Form data', data);

    await axios
      .post(`${BASE_URL}/seller/product`, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          access_token: `${user}`,
        },
      })
      .then(response => {
        console.log(user);
        console.log(response);
      })
      .catch(error => {
        console.log(user);
        console.log(error);
      });
    // console.log('res : ', res);
  };

  return (
    <ScrollView style={styles.pages}>
      <View>
        <Headers
          title="Lengkapi Detail Produk"
          type="back-title"
          onPress={() => navigation.goBack()}
        />
      </View>

      <Formik
        initialValues={{namaproduk: '', harga: '', kategori: [], deskripsi: ''}}
        onSubmit={onSubmit}>
        {({
          handleChange,
          handleSubmit,
          errors,
          values,
          handleBlur,
          touched,
        }) => (
          <View style={styles.form}>
            <InputComponent
              label="Nama Produk"
              onChangeText={handleChange('namaproduk')}
              value={values.namaproduk}
              onBlur={handleBlur('namaproduk')}
              errorMessage={
                touched.namaproduk &&
                errors.namaproduk && (
                  <Text style={styles.textError}>{errors.namaproduk}</Text>
                )
              }
            />

            <Gap height={10} />
            <InputComponent
              label="Harga"
              onChangeText={handleChange('harga')}
              value={values.harga}
              onBlur={handleBlur('harga')}
              errorMessage={
                touched.harga &&
                errors.harga && (
                  <Text style={styles.textError}>{errors.harga}</Text>
                )
              }
            />
            <Gap height={10} />
            <InputComponent
              label="Deskripsi"
              onChangeText={handleChange('deskripsi')}
              value={values.deskripsi}
              onBlur={handleBlur('deskripsi')}
              numberOfLines={3}
              errorMessage={
                touched.deskripsi &&
                errors.deskripsi && (
                  <Text style={styles.textError}>{errors.deskripsi}</Text>
                )
              }
            />

            <Gap height={10} />

            <Gap height={-50} />

            <DropdownComponent
              data={kategori}
              value={value}
              title={'Kategori'}
              labelField="name"
              valueField="id"
              isFocus={isFocus}
              onChange={item => {
                setValue(item);
                values.kategori = [item.id];
                console.log('item : ', item);
              }}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              placeholder={!isFocus ? 'Select category' : '...'}
            />

            <ButtonCamera onPress={getImage} url={photo} />
            {/* <TouchableOpacity
              onPress={openImagePicker}
              style={styles.rectangle}>
              <MaterialCommunityIcons
                name="image-plus"
                size={30}
                color="#444"
                style={styles.icon1}
              />
            </TouchableOpacity> */}

            <Gap height={20} />
            <ButtonComponent title="Simpan" onPress={handleSubmit} />

            <Gap height={20} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  borderText: {
    marginLeft: windowWidth * 0.3,
    marginTop: windowHeight * -0.06,
  },
  text1: {
    color: '#112340',
    fontSize: 16,
    marginTop: 10,
    // fontFamily: fonts.Poppins.SemiBold,
  },
  icon1: {
    alignSelf: 'center',
    lineHeight: ms(150),
  },
  name: {
    marginTop: windowHeight * 0.3,
  },
  input1: {
    borderWidth: 1,
    height: 50,
    width: windowWidth * 0.93,
    borderRadius: 12,
  },
  Button: {
    width: 250,
    marginLeft: windowWidth * 0.1,
    marginTop: windowHeight * 0.1,
  },

  text: {
    fontSize: 24,
  },
  kota: {
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 15,
  },
  dropdown1BtnStyle: {
    width: windowWidth * 0.82,
    height: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    marginTop: 6,
  },
  dropdown1BtnTxtStyle: {
    color: '#444',
    textAlign: 'left',
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF',
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {
    color: '#444',
    textAlign: 'left',
  },
  dropdown1SelectedRowStyle: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dropdown1searchInputStyleStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  errorText: {
    // fontFamily: fonts.Poppins.Medium,
    color: 'red',
    fontSize: 12,
  },

  form: {
    paddingHorizontal: 5,
    marginTop: ms(20),
  },
  rectangle: {
    width: 150,
    height: 200,
    marginLeft: ms(20),
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: COLORS.black,
    borderRadius: 10,
  },
});

export default Jual;
