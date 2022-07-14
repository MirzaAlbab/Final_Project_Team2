import {StyleSheet, View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import {showError} from '../../utils/ShowMessage';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import Input from '../../components/Input';
import Headers from '../../components/Headers';
import Gap from '../../components/Gap';
import Button from '../../components/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import {API_URL} from '@env';
import {useSelector} from 'react-redux';
const Jual = ({navigation}) => {
  const [photo, setPhoto] = useState([]);
  const {user} = useSelector(state => state.login);
  const [kategori, setKategori] = useState([]);
  const token = user.access_token;
  const openImagePicker = () => {
    // let Imagelist = [];

    launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
        includeBase64: true,
        multiple: true,
      },
      response => {
        // console.log('response : ', response);
        if (response.didCancel || response.error) {
          showError('Anda belum memilih foto');
        } else {
          const source = response?.assets[0];

          const Uri = {uri: source.uri};

          setPhoto(Uri);
          // const source = response?.assets[0];
          // // console.log('response GetImage : ', source);
          // const Uri = {uri: source.uri};
          // setPhoto(Uri);
        }
      },
    );
  };
  useEffect(() => {
    // getCategory();
  }, []);

  const getCategory = () => {
    try {
      axios
        .get(`${API_URL}/seller/category`, {})
        .then(res => {
          console.log(res.data);
          const allkategori = res.data;
          allkategori.map(item => {
            kategori.push(item.name);
          });
        })
        .catch(err => {
          console.log('err : ', err);
        });
    } catch (error) {
      console.log('error : ', error);
    }
  };
  const onSubmit = values => {
    console.log('masuk');
    console.log('values : ', values);
    const body = {
      name: values.nama,
      description: values.deskripsi,
      base_price: values.harga,
      category_ids: values.kategori,
      location: values.lokasi,
      images: photo,
    };
    try {
      const res = axios.post(`${API_URL}/seller/product`, body, {
        headers: {access_token: `${token}`},
      });
      console.log(`${token}`);
      console.log('res : ', res);
    } catch (error) {
      console.log('error : ', error);
    }
  };

  return (
    <View style={styles.pages}>
      <View>
        <Headers
          title="Lengkapi Detail Produk"
          type="back-title"
          onPress={() => navigation.goBack()}
        />
      </View>

      <Formik
        initialValues={{namaproduk: '', harga: '', kategori: '', deskripsi: ''}}
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
            <Input
              label="Nama Produk"
              onChangeText={handleChange('namaproduk')}
              value={values.namaproduk}
              onBlur={handleBlur('namaproduk')}
            />
            {errors.namaproduk && touched.namaproduk && (
              <Text style={styles.errorText}>{errors.namaproduk}</Text>
            )}
            <Gap height={10} />
            <Input
              label="Harga"
              onChangeText={handleChange('harga')}
              value={values.harga}
              onBlur={handleBlur('harga')}
            />
            {errors.harga && touched.harga && (
              <Text style={styles.errorText}>{errors.harga}</Text>
            )}
            <Gap height={10} />

            <SelectDropdown
              data={kategori}
              label="Kategori"
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(index, value) => {
                console.log('index : ', index);
                console.log('value : ', value);
                setKategori(value);
              }}
              defaultButtonText="Pilih Kategori"
              buttonTextAfterSelection={selectedItem => selectedItem}
              rowTextForSelection={item => item}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color="#444"
                  size={18}
                />
              )}
              dropdownIconPosition="right"
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              selectedRowStyle={styles.dropdown1SelectedRowStyle}
              search
              searchInputStyle={styles.dropdown1searchInputStyleStyle}
              searchPlaceHolder="Search here"
              searchPlaceHolderColor="darkgrey"
              renderSearchInputLeftIcon={() => (
                <FontAwesome name="search" color="#444" size={18} />
              )}
            />
            {errors.kota && touched.kota && (
              <Text style={styles.errorText}>{errors.kota}</Text>
            )}
            <Gap height={10} />
            <Input
              label="Deskripsi"
              onChangeText={handleChange('deskripsi')}
              value={values.deskripsi}
              onBlur={handleBlur('deskripsi')}
            />
            {errors.deskripsi && touched.deskripsi && (
              <Text style={styles.errorText}>{errors.deskripsi}</Text>
            )}
            <Gap height={10} />
            <TouchableOpacity onPress={openImagePicker}>
              <MaterialCommunityIcons
                name="image-plus"
                size={30}
                color="#444"
              />
            </TouchableOpacity>

            <Gap height={20} />
            <Button title="Simpan" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
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
    marginRight: 64,
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
    margin: 15,
  },
});

export default Jual;
