import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import propTypes from 'prop-types';

function Input2({
  onChangeText,
  value,
  label,
  onBlur,
  placeholder,
  cannotEdited,
  ...props
}) {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        label={label}
        onBlur={onBlur}
        placeholder={placeholder}
        mode="outlined"
        activeOutlineColor="black"
        style={{...styles.input, ...props.style}}
        {...props}
      />
    </View>
  );
}

export default memo(Input2);

const styles = StyleSheet.create({
  input: {
    // fontFamily: fonts.Poppins.Regular,
    // fontSize: fontSize.medium,
    color: 'black',
  },
});

Input2.propTypes = {
  onChangeText: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onBlur: propTypes.func.isRequired,
  cannotEdited: propTypes.bool,
  secureTextEntry: propTypes.bool,
  leftIcon: propTypes.string,
};

Input2.defaultProps = {
  cannotEdited: false,
  secureTextEntry: false,
  leftIcon: undefined,
};
