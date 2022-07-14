import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {dateConvert, formatRupiah} from '../../utils/helperFunction';

function CardListNotif({
  source,
  name,
  harga,
  hargaNego,
  onPress,
  date,
  status,
  read,
}) {
  const titleNotif = () => {
    switch (status) {
      case 'Terjual':
        return 'Barang Berhasil Terjual';
      case 'create':
        return 'Berhasil di terbitkan';
      case 'bid':
        return 'Penawaran Produk';
      case 'accepted':
        return 'Penawaran Diterima';
      case 'Dibatalkan':
        return 'Penawaran Ditolak';
      default:
        return '';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <FastImage source={source} style={styles.image} />
        <View>
          <Text style={styles.productNego}>{titleNotif()}</Text>
          <Text style={styles.text}>{name}</Text>
          {status !== 'create' ? (
            <Text style={styles.textLineMiddle}>{formatRupiah(harga)}</Text>
          ) : (
            <Text style={styles.text}>{formatRupiah(harga)}</Text>
          )}
          {hargaNego !== (undefined || null) && (
            <Text style={styles.text}>
              {status === 'accepted' ? 'Berhasil Ditawar' : 'Ditawar'}{' '}
              {formatRupiah(hargaNego)}
            </Text>
          )}
          {status === 'accepted' && (
            <Text style={styles.textSubtitle}>
              Kamu akan segera dihubungi penjual via whatsapp
            </Text>
          )}
        </View>
        <Text style={styles.date}>{dateConvert(date)}</Text>
        {read === false && <Icon name="ellipse" color="red" size={10} />}
      </View>
    </TouchableOpacity>
  );
}

export default CardListNotif;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    // borderBottomColor: colors.border.primary,
  },
  wrapper: {
    flexDirection: 'row',
  },

  image: {
    marginRight: 16,
    width: 48,
    height: 48,
    // borderRadius: borderRadius.large,
    borderWidth: 1,
    // borderColor: colors.border.secondary,
  },

  text: {
    marginRight: 16,
    // fontSize: fontSize.medium,
    // fontFamily: fonts.Poppins.Regular,
    // color: colors.text.primary,
  },

  productNego: {
    // fontFamily: fonts.Poppins.Regular,
    fontSize: 10,
    // color: colors.text.subtitle,
  },

  date: {
    // fontFamily: fonts.Poppins.Regular,
    fontSize: 10,
    // color: colors.text.subtitle,
    marginLeft: 'auto',
    marginRight: 8,
  },

  textLineMiddle: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    // fontFamily: fonts.Poppins.Regular,
    // fontSize: fontSize.medium,
    // color: colors.text.primary,
  },

  //   textSubtitle: {
  //     // fontFamily: fonts.Poppins.Regular,
  //     // fontSize: fontSize.verySmall,
  //     // color: colors.text.subtitle,
  //   },
});

CardListNotif.PropTypes = {
  name: PropTypes.string,
  harga: PropTypes.number,
  hargaNego: PropTypes.number,
  onPress: PropTypes.func,
  date: PropTypes.string,
};

CardListNotif.defaultProps = {
  hargaNego: undefined,
  onPress: undefined,
  name: undefined,
  harga: undefined,
  date: undefined,
};
