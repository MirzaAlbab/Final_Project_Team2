import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {SignInSchema} from '../../components/ValidateYup';
// import {API_URL} from '@env';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setUser} from './redux/action';
import {Button, Gap, InputComponent, Link} from '../../components';
import {COLORS, fonts} from '../../utils';
import {BASE_URL} from '../../helpers/API';
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const _onLogin = async values => {
    try {
      const body = {
        email: values.email,
        password: values.password,
      };
      console.log(body, 'body');
      const res = await axios.post(`${BASE_URL}/auth/login`, body);
      console.log(res, 'res');
      dispatch(setUser(res.data));
      console.log(res.data);

      navigation.navigate('BottomTabs');
    } catch (error) {
      console.log(error);
    }
  };
  let initialValues = {
    email: '',
    password: '',
  };
  return (
    <Formik
      validationSchema={SignInSchema}
      initialValues={initialValues}
      onSubmit={_onLogin}>
      {({values, handleChange, errors, touched, handleSubmit}) => (
        <SafeAreaView style={styles.container}>
          <View style={styles.containerInput}>
            <Text style={styles.register}>SIGN UP</Text>
            <Gap height={30} />

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

            <Button title={'LOGIN'} onPress={handleSubmit} />
            <Gap height={90} />
            <View style={styles.account}>
              <Text style={styles.text}>Belum punya akun ?</Text>
              <Gap width={10} />
              <Link
                title="Register disini"
                size={14}
                align="center"
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default Login;

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
