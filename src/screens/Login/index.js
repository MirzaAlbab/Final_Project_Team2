import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {SignInSchema} from '../../components/ValidateYup';
import {ms} from 'react-native-size-matters';
import {API_URL} from '@env';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setUser} from './redux/action';

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
      <Text style={styles.header}>Masuk</Text>
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
            <Text style={styles.labelem}>Email</Text>
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
            )}

            <TouchableOpacity
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
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: 'black',
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginRight: ms(200),
  },
  labelem: {
    marginRight: ms(220),
  },
  signupTextCont: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  error: {
    fontSize: 10,
    color: 'red',
    alignSelf: 'center',
  },
});
