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
              // color={passwordVisible ? colors.background.black : colors.warning}
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

// import {SafeAreaView, Text, StyleSheet} from 'react-native';
// import React, {useState} from 'react';
// import {Input} from '@rneui/themed';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {fonts, COLORS} from '../../utils';

// export const InputComponent = ({
//   value,
//   label,
//   placeholder,
//   errorMessage,
//   onChangeText,
//   password,
//   errors,
// }) => {
//   const [showPassword, setShowPassword] = useState(password);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Input
//         value={value}
//         placeholder={placeholder}
//         label={label}
//         labelStyle={styles.label}
//         inputStyle={styles.inputStyle}
//         inputContainerStyle={styles.inputContainerStyle}
//         secureTextEntry={showPassword}
//         errorMessage={errorMessage}
//         onChangeText={onChangeText}
//         rightIcon={
//           password && (
//             <Ionicons
//               onPress={() => setShowPassword(!showPassword)}
//               name={showPassword ? 'eye-outline' : 'eye-off-outline'}
//               style={styles.eye}
//             />
//           )
//         }
//         rightIconContainerStyle={styles.eye}
//       />
//       <Text style={styles.text}>{errors}</Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: COLORS.white,
//   },
//   label: {
//     fontFamily: fonts.Poppins[400],
//     fontStyle: 'normal',
//     color: COLORS.black,
//     marginBottom: 9,
//   },
//   inputStyle: {
//     color: COLORS.black,
//     display: 'flex',
//     flexDirection: 'row',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     alignItems: 'center',
//   },
//   inputContainerStyle: {
//     borderWidth: 1,
//     borderRadius: 16,
//     borderColor: COLORS.gray,
//   },
//   eye: {
//     right: '14.5%',
//     color: COLORS.black,
//     fontSize: 40,
//   },
//   error: {
//     color: COLORS.red,

//   },
// });
