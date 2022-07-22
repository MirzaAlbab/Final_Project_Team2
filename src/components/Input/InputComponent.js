import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fonts, COLORS} from '../../utils';
import {Input} from '@rneui/themed';
import React, {useState} from 'react';

const InputComponent = ({
  value,
  label,
  placeholder,
  multiline,
  numberOfLines,
  keyboardType,
  onSubmitEditing,
  blurOnSubmit,
  errorMessage,
  onChangeText,
  password,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(password);

  return (
    <SafeAreaView style={styles.container}>
      <Input
        value={value}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={blurOnSubmit}
        label={label}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.inputContainerStyle}
        secureTextEntry={showPassword}
        errorMessage={errorMessage}
        onChangeText={onChangeText}
        rightIcon={
          password && (
            <Ionicons
              onPress={() => setShowPassword(!showPassword)}
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              style={styles.eye}
            />
          )
        }
        rightIconContainerStyle={styles.eye}
      />
      <Text style={styles.text}>{errors}</Text>
    </SafeAreaView>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  label: {
    fontFamily: fonts.Poppins[400],
    fontStyle: 'normal',
    color: COLORS.black,
    marginBottom: 9,
  },
  inputStyle: {
    color: COLORS.black,
    display: 'flex',
    flexDirection: 'row',

    paddingHorizontal: 16,
    alignItems: 'center',
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: COLORS.gray,
  },
  eye: {
    right: '14.5%',
    color: COLORS.black,
    fontSize: 30,
  },
  error: {
    color: COLORS.red,
  },
});
