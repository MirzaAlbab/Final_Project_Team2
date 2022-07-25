import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {ms} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Gap from '../../components/Gap';
import {fonts} from '../../utils';

const DropdownComponent = ({
  title,
  labelField,
  valueField,
  data,
  value,
  onChange,
  onChangeText,
  placeholder,
  isFocus,
  onFocus,
  onBlur,
}) => {
  // const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Text style={styles.text}>{title}</Text>
      <Gap height={ms(4)} />
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        labelField={labelField}
        valueField={valueField}
        maxHeight={300}
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: ms(10),
  },
  dropdown: {
    borderWidth: ms(1),
    borderRadius: ms(10),
    paddingHorizontal: ms(16),
    paddingVertical: ms(12),
    borderColor: '#D0D0D0',
  },
  icon: {
    marginRight: ms(5),
  },

  placeholderStyle: {
    fontSize: ms(16),
  },
  selectedTextStyle: {
    fontSize: ms(16),
  },

  text: {
    fontSize: ms(14),
    color: '#000',
    fontFamily: fonts.Poppins['600'],
  },
  selectedStyle: {
    borderRadius: 12,
  },
});
