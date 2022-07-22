import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import propTypes from 'prop-types';

function CardListAccount({onPress, name, title}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={name} size={25} color="#7126B5" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CardListAccount;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
  },

  text: {
    marginLeft: 20,
    // fontSize: fontSize.small,
    fontFamily: 'Poppins',
    color: 'black',
  },
});

CardListAccount.propTypes = {
  onPress: propTypes.func,
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

CardListAccount.defaultProps = {
  onPress: undefined,
};
