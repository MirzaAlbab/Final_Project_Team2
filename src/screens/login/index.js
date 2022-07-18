import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {SignInSchema} from '../../utils/Validation';
import {ms} from 'react-native-size-matters';
import {API_URL} from '@env';
import {COLORS, fonts} from '../../utils';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setUser} from './redux/action';
import {Gap, Link, Button, InputComponent} from '../../components';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const _onLogin = async values => {
    try {
      const body = {
        email: values.email,
        password: values.password,
      };
      const res = await axios.post(`${API_URL}/auth/login`, body);
      dispatch(setUser(res.data));
      console.log(res.data);
      navigation.navigate('Dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => _onLogin(values)}
        validationSchema={SignInSchema}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.form}>
            <Text style={styles.header}>SIGN IN</Text>
            <Gap height={30} />
            <InputComponent
              label={'Email'}
              placeholder={'Email'}
              value={values.email}
              onChangeText={handleChange('email')}
              errorMessage={
                touched.email &&
                errors.email && (
                  <Text style={styles.textError}>{errors.email}</Text>
                )
              }
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <Gap height={10} />
            <InputComponent
              label={'Password'}
              placeholder={'Password'}
              value={values.password}
              onChangeText={handleChange('password')}
              errorMessage={
                touched.password &&
                errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )
              }
            />
            {/* <Text style={styles.labelem}>Email</Text>
            <TextInput
              style={styles.inputBox}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.inputBox}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )} */}

            {/* <TouchableOpacity
              style={styles.button}
              disabled={!isValid}
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Don't have an account yet?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signupButton}> Signup</Text>
              </TouchableOpacity>
            </View> */}

            <Gap height={40} />

            <Button title={'LOGIN'} onPress={handleSubmit} />
            <Gap height={90} />
            <View style={styles.account}>
              <Text style={styles.text}>Belum punya akun ?</Text>
              <Gap width={10} />
              <Link
                title="Daftar disini"
                size={14}
                align="center"
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // fontSize: 24,

    // marginLeft: ms(20),
    fontFamily: fonts.Poppins['700'],
    fontSize: 24,
    color: COLORS.black,
    lineHeight: 36,
    fontStyle: 'normal',
    left: 12,
  },
  container: {
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
    borderColor: '#D0D0D0',
    borderWidth: 1,
  },
  button: {
    width: 300,
    backgroundColor: '#7126B5',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  form: {
    // flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

    paddingTop: ms(50),
    paddingHorizontal: ms(30),
  },
  label: {
    marginRight: ms(200),
  },
  labelem: {
    marginRight: ms(220),
  },
  signupTextCont: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  error: {
    fontSize: 10,
    color: 'red',
    alignSelf: 'center',
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
    lineHeight: ms(20),
  },
});
