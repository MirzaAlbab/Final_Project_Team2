/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Gap} from '../../components';
import Headers from '../../components/Headers';
import {gantiPassSchema} from '../../utils/Validation';
import Input2 from '../../components/Input2';
import {Formik} from 'formik';
import {windowHeight} from '../../utils/Dimension';
import {gantiPass} from './redux/action';
import {COLORS} from '../../utils';
import axios from 'axios';
import {BASE_URL} from '../../helpers/API';
import {fonts} from '../../utils';
import ButtonComponent from '../../components/ButtonComponent';
import InputComponent from '../../components';
import {setLoading} from '../redux/reducer/globalAction';
function ForgotPasswordScreen({navigation}) {
  const dispatch = useDispatch();
  const stateGlobal = useSelector(state => state.global);
  const {user} = useSelector(state => state.login);
  const [value, setValue] = useState(null);

  const [User, setUser] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });

  // const updatePass = (current_password, new_password, confirm_password) =>
  //   axios.put(`${BASE_URL}/auth/change-password`, {

  //     current_password,
  //     new_password,
  //     confirm_password,
  //   });
  // // console.log(updatePass);

  const onSubmit = (current, newPass, confirmPass) => {
    dispatch(gantiPass(current, newPass, confirmPass, navigation));
  };

  const gantiPassword = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/auth/change-password`, {
        headers: {access_token: `${user.access_token}`},
      });
      console.log(BASE_URL);
      setUser({
        current_password: res.data.current_password,
        new_password: res.new_password,
        confirm_password: res.confirm_password,
      });
      // setPhoto(res.data.image_url);
      // setValue(res.data.city);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const putPassword = async values => {
    try {
      const body = new FormData();
      body.append('current_password', values.current_password);
      body.append('new_password', values.new_password);
      body.append('confirm_password', values.confirm_password);
      console.log(user);
      const res = await fetch(`${BASE_URL}/auth/change-password`, {
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Headers type="back-title" onPress={() => navigation.goBack()} />
        <Formik
          initialValues={{
            current_password: '',
            new_password: '',
            confirm_password: '',
          }}
          onSubmit={(values, {resetForm}) => {
            onSubmit(
              values.current_password,
              values.new_password,
              values.confirm_password,
            );
            resetForm();
          }}
          validationSchema={gantiPassSchema}>
          {({
            handleChange,
            handleSubmit,
            errors,
            isValid,
            values,
            handleBlur,
            touched,
            dirty,
          }) => (
            <SafeAreaView>
              <Text style={styles.header}>Ganti Password</Text>
              <Gap height={windowHeight * 0.05} />
              <Input2
                onChangeText={handleChange('current_password')}
                value={values.current_password}
                label="Password Sekarang"
                onBlur={handleBlur('current_password')}
                secureTextEntry
              />
              {errors.current_password && touched.current_password && (
                <Text style={styles.errorText}>{errors.current_password}</Text>
              )}
              <Gap height={16} />
              <Input2
                onChangeText={handleChange('new_password')}
                value={values.new_password}
                label="Password Baru"
                onBlur={handleBlur('new_password')}
                secureTextEntry
              />
              {errors.new_password && touched.new_password && (
                <Text style={styles.errorText}>{errors.new_password}</Text>
              )}
              <Gap height={16} />
              <Input2
                onChangeText={handleChange('confirm_password')}
                value={values.confirm_password}
                label="Confirm Password"
                onBlur={handleBlur('confirm_password')}
                secureTextEntry
              />
              {errors.confirm_password && touched.confirm_password && (
                <Text style={styles.errorText}>{errors.confirm_password}</Text>
              )}
              <Gap height={40} />
              {/* <ButtonComponent
                title="Confirm"
                onPress={handleSubmit}
                disable={!(dirty && isValid) || stateGlobal.isLoading}
              /> */}
              <ButtonComponent
                title="Confirm"
                onPress={handleSubmit}
                // disable={!(dirty && isValid) || stateGlobal.isLoading}
              />
            </SafeAreaView>
          )}
        </Formik>
        <Gap height={windowHeight * 0.1} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  errorText: {
    // fontFamily: fonts.Poppins.Medium,
    color: COLORS.red,
    // fontSize: fontSize.small,
  },
  // RegisterText: {
  //   color: colors.text.secondary,
  //   fontFamily: fonts.Poppins.Bold,
  // },
  container: {
    flex: 1,
    margin: 16,

    // backgroundColor: '#fff',
  },
  header: {
    marginTop: windowHeight * 0.05,
    alignSelf: 'flex-start',
    // fontFamily: fonts.Poppins.Bold,
    // color: colors.text.tertiary,
    fontFamily: fonts.Poppins['700'],
    fontSize: 30,
    color: COLORS.black,
  },

  goRegisterWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  // registerTitle: {
  //   fontFamily: fonts.Poppins.Medium,
  //   fontSize: fontSize.medium,
  //   color: colors.text.black,
  // },

  iconWrapper: {
    marginTop: 16,
    alignItems: 'center',
  },

  iconButton: {
    width: 54,
    height: 54,
    borderRadius: 54 / 5,
  },
});
