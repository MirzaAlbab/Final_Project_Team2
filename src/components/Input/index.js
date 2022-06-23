import React, {memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

function Input({
  onChangeText,
  value,
  label,
  onBlur,
  cannotEdited,
  secureTextEntry,
  leftIcon,
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        label={label}
        onBlur={onBlur}
        mode="outlined"
        style={styles.input}
        secureTextEntry={secureTextEntry ? passwordVisible : false}
        left={<TextInput.Icon name={leftIcon} />}
        right={
          secureTextEntry ? (
            <TextInput.Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          ) : null
        }
      />
    </View>
  );
}

export default memo(Input);

const styles = StyleSheet.create({
  input: {
    // fontFamily: fonts.Poppins.Regular,
    fontSize: 16,
  },
});
