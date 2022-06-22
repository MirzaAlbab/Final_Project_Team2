import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {COLORS, fonts} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Gap, Link, Button, InputComponent} from '../../components';

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.register}>SIGN UP</Text>
        <Gap height={30} />
        <InputComponent label={'Name'} placeholder={'Name'} />
        <InputComponent label={'Email'} placeholder={'Example@gmail.com'} />
        <InputComponent label={'Password'} placeholder={'Password'} password />
        <Button title={'REGISTER'} />
        <Gap height={140} />
        <View style={styles.account}>
          <Text style={styles.text}>Sudah punya akun ?</Text>
          <Gap width={10} />
          <Link
            title="Masuk disini"
            size={14}
            align="center"
            onPress={console.log('register')}
          />
        </View>
      </View>
    </SafeAreaView>
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
});
