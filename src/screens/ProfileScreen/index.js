import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import {showError} from '../../utils/ShowMessage';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import Input from '../../components/Input';
import ButtonComponent from '../../components/ButtonComponent';
import {Profile2} from '../../components';
import {ILNullPhoto} from '../../assets/icons/images';
import Headers from '../../components/Headers';
import {ms} from 'react-native-size-matters';
import Gap from '../../components/Gap';
import {updateProfileSchema} from '../../utils/Validation';

export default function ProfileScreen({navigation}) {
  const [photo, setPhoto] = useState(ILNullPhoto);
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

          const Uri = {uri: source.uri};
          setPhoto(Uri);
        }
      },
    );
  };

  const kota = [
    'Ambon',
    'Balikpapan',
    'Banda Aceh',
    'Bandar Lampung',
    'Bandung',
    'Banjar',
    'Banjarbaru',
    'Banjarmasin',
    'Batam',
    'Batu',
    'Baubau',
    'Bekasi',
    'Bengkulu',
    'Bima',
    'Binjai',
    'Bitung',
    'Blitar',
    'Bogor',
    'Bontang',
    'Bukittinggi',
    'Cilegon',
    'Cimahi',
    'Cirebon',
    'Denpasar',
    'Depok',
    'Dumai',
    'Gorontalo',
    'Gunungsitoli',
    'Jakarta Barat',
    'Jakarta Pusat',
    'Jakarta Selatan',
    'Jakarta Timur',
    'Jakarta Utara',
    'Jambi',
    'Jayapura',
    'Kediri',
  ];

  return (
    <View style={styles.pages}>
      <View>
        <Headers
          title="Lengkapi Info Akun"
          type="back-title"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.photo}>
        <Profile2 source={photo} isRemove={true} onPress={getImage} />
      </View>
      <Formik
        initialValues={{fullname: '', kota: '', alamat: '', nomortelepon: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={updateProfileSchema}>
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
              leftIcon="account"
              label="Nama"
              onChangeText={handleChange('fullname')}
              value={values.fullname}
              onBlur={handleBlur('fullname')}
              validationSchema={updateProfileSchema}
            />
            {errors.fullname && touched.fullname && (
              <Text style={styles.errorText}>{errors.fullname}</Text>
            )}
            <Gap height={10} />

            <SelectDropdown
              data={kota}
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText="Pilih Kota"
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
              leftIcon="home"
              label="Alamat"
              onChangeText={handleChange('alamat')}
              value={values.alamat}
              onBlur={handleBlur('alamat')}
            />
            {errors.alamat && touched.alamat && (
              <Text style={styles.errorText}>{errors.alamat}</Text>
            )}
            <Gap height={10} />
            <Input
              leftIcon="cellphone"
              label="No. Handphone"
              onChangeText={handleChange('nomortelepon')}
              value={values.nomortelepon}
              onBlur={handleBlur('nomortelepon')}
            />
            {errors.nomortelepon && touched.nomortelepon && (
              <Text style={styles.errorText}>{errors.nomortelepon}</Text>
            )}
            <Gap height={10} />
            <View style={styles.button}>
              <ButtonComponent title="Simpan" onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

// export default ProfileScreen;

const styles = StyleSheet.create({
  pages: {
    flex: 1,

    paddingHorizontal: 20,
  },
  borderText: {
    marginLeft: windowWidth * 0.3,
    marginTop: windowHeight * -0.06,
  },
  profile: {
    paddingHorizontal: 5,
    margin: 15,
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
  button: {
    width: 230,
    alignSelf: 'center',
    borderRadius: 12,
    marginTop: ms(15),
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
    width: windowWidth * 0.9,
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
  photo: {
    marginTop: windowHeight * 0.04,
  },
  form: {
    // paddingHorizontal: 5,
    // margin: 15,
  },
});
