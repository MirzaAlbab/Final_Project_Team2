import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {fonts, COLORS} from '../../utils';
import Feather from 'react-native-vector-icons/Feather';
import {moderateScale} from 'react-native-size-matters';
import {Poppins} from '../FontComponent';

const InputProfile = ({
  onChangeText,
  value,
  placeholder,
  secureTextEntry = false,
  styleInput,
  placeholderTextColor = 'black',
  onSubmitEditing,
  password = false,
  styleInputName,
  inputName,
  multiline,
  numberOfLines,
  onBlur,
  keyboardType,
}) => {
  const stylesInput = Array.isArray(styleInput)
    ? Object.assign({}, ...styleInput)
    : styleInput;

  const stylesInputName = Array.isArray(styleInputName)
    ? Object.assign({}, ...styleInputName)
    : styleInputName;

  const [seenPass, setSeenPass] = useState(false);

  const seenPassword = () => {
    if (seenPass) {
      setSeenPass(false);
    } else {
      setSeenPass(true);
    }
  };

  return (
    <View style={styles.page}>
      <View>
        <Poppins style={[styles.inputName, {...stylesInputName}]}>
          {inputName}
        </Poppins>
      </View>
      <View style={password ? styles.password : null}>
        <TextInput
          style={[styles.input, {...stylesInput}]}
          onChangeText={onChangeText}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry && !seenPass ? true : false}
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
        />
        {password ? (
          <TouchableOpacity style={styles.seenButton} onPress={seenPassword}>
            <Feather
              name={seenPass ? 'eye' : 'eye-off'}
              color="black"
              size={17}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default InputProfile;

const styles = StyleSheet.create({
  input: {
    height: moderateScale(48),
    borderRadius: moderateScale(16),
    borderColor: 'black',
    borderWidth: 1,
    padding: moderateScale(15),
    color: 'black',
    fontSize: moderateScale(14),
    marginHorizontal: moderateScale(15),
  },
  inputName: {
    fontSize: moderateScale(15),
    // color: 'yellow',
    fontFamily: fonts.Poppins['700'],
    marginLeft: moderateScale(10),
    color: COLORS.black,

    fontStyle: 'normal',
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seenButton: {
    marginStart: moderateScale(-50),
  },
  page: {
    margin: moderateScale(5),
  },
});
