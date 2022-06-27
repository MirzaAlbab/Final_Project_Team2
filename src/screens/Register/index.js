import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Alert} from 'react-native';
import {COLORS, fonts} from '../../utils';
import {Gap, Link, Button, InputComponent} from '../../components';
import axios from 'axios';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {BASE_URL} from '../../helpers/API';

const Register = () => {
  const validationSchema = Yup.object().shape({
    full_name: Yup.string()
      .label('full_name')
      .min(5, 'Must Contain 5 Characters')
      .max(20, 'Max 20 Characters')
      .required('Please fill in the input full_name'),
    email: Yup.string()
      .label('Email')
      .email('Enter a valid email')
      .required('Please fill in the input email'),
    password: Yup.string()
      .label('Password')
      .required('Please fill in the input password')
      .matches(
        ' ((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))',
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
      ),
  });

  const submitRegister = async values => {
    try {
      let data = {
        full_name: values.full_name,
        email: values.email,
        password: values.password,
        phone_number: 'null',
        address: 'null',
        image_url: 'null',
        city: 'null',
      };
      const res = await axios.post(`${BASE_URL}/auth/register`, data);

      console.log(res, 'res');
      console.log(data, 'data post');

      if (res.status === 201) {
        Alert.alert('berhasil register');
      }
    } catch (error) {
      if (error.response.status === 400) {
        Alert.alert('Email already exists');
      }
      if (error.response.status === 500) {
        Alert.alert('Internal Service Error');
      }

      console.log(error);
    }
  };

  let initialValues = {
    full_name: '',
    email: '',
    password: '',
    phone_number: '',
    address: '',
    image_url: '',
    city: '',
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={submitRegister}>
      {({values, handleChange, errors, touched, handleSubmit}) => (
        <SafeAreaView style={styles.container}>
          <View style={styles.containerInput}>
            <Text style={styles.register}>SIGN UP</Text>
            <Gap height={30} />
            <InputComponent
              label={'Fullname'}
              placeholder={'Full name'}
              value={values.full_name}
              onChangeText={handleChange('full_name')}
              errorMessage={
                touched.full_name &&
                errors.full_name && (
                  <Text style={styles.textError}>{errors.full_name}</Text>
                )
              }
            />

            <Gap height={10} />
            <InputComponent
              label={'Email'}
              placeholder={'Example@gmail.com'}
              value={values.email}
              onChangeText={handleChange('email')}
              errorMessage={
                touched.email &&
                errors.email && (
                  <Text style={styles.textError}>{errors.email}</Text>
                )
              }
            />

            <Gap height={10} />

            <InputComponent
              password
              label={'Password'}
              placeholder={'Password'}
              value={values.password}
              onChangeText={handleChange('password')}
              errorMessage={
                touched.password &&
                errors.password && (
                  <Text style={styles.textError}>{errors.password}</Text>
                )
              }
            />

            <Gap height={40} />

            <Button title={'REGISTER'} onPress={handleSubmit} />
            <Gap height={90} />
            <View style={styles.account}>
              <Text style={styles.text}>Sudah punya akun ?</Text>
              <Gap width={10} />
              <Link
                title="Masuk disini"
                size={14}
                align="center"
                onPress={console.log('submit register')}
              />
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerInput: {
    paddingTop: 50,
    paddingHorizontal: 5,
  },

  register: {
    fontFamily: fonts.Poppins['700'],
    fontSize: 24,
    color: COLORS.black,
    lineHeight: 36,
    fontStyle: 'normal',
    left: 12,
  },

  account: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.Poppins['400'],
    fontSize: 14,
    color: COLORS.black,
    textAlign: 'center',
    lineHeight: 20,
  },
  textError: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
    left: 14,
  },
});
