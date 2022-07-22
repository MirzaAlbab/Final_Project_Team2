import {Text, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import Headers from '../../components/Headers';
import {COLORS, fonts} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import people from '../../assets/images/people.png';
const DaftarJual = () => {
  return (
    <View style={styles.container}>
      <Headers title="Daftar Jual Saya" />
      <View style={styles.card}>
        <View style={styles.onContainer}>
          <Image
            source={{uri: 'https://source.unsplash.com/random'}}
            resizeMode={'cover'}
            style={styles.peopleImage}
          />
          <View>
            <Text style={styles.sellerName}>Seller 1</Text>
            <Text style={styles.city}>Palembang</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.editbutton}>
              <Text style={styles.edittext}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={styles.rectangle}>
          <Ionicons style={styles.addicon} name="add" size={30} />
          <Text style={styles.icontext}>Add Image</Text>
        </View>
        <View style={styles.productcard}>
          <Image
            source={{uri: 'https://source.unsplash.com/random/140x100'}}
            resizeMode={'cover'}
            style={styles.productImage}
          />
          <Text style={styles.productname}>Jam Tangan Casio</Text>
          <Text style={styles.productcategory}>Aksesoris</Text>
          <Text style={styles.productprice}>Rp 250.000</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: ms(10),
  },
  onContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  peopleImage: {
    height: ms(48),
    width: ms(48),
    borderRadius: ms(12),
    flexGrow: 0,
  },
  sellerName: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(20),
    color: COLORS.darkBrown,
    left: ms(16),
    width: ms(69),
    height: ms(20),
    alignSelf: 'stretch',
  },
  city: {
    fontFamily: fonts.Poppins['400'],
    lineHeight: ms(14),
    color: COLORS.gray,
    left: ms(16),
    alignSelf: 'stretch',
    width: ms(69),
    height: ms(14),
  },

  card: {
    marginTop: ms(10),
    marginBottom: ms(10),
    borderRadius: ms(10),
    backgroundColor: COLORS.white,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.84,
    elevation: 5,
    padding: ms(16),
    paddingTop: ms(20),
  },
  editbutton: {
    backgroundColor: COLORS.white,
    borderRadius: ms(10),
    padding: ms(8),
    paddingHorizontal: ms(12),
    marginLeft: ms(150),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.84,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(10),
    marginBottom: ms(10),
  },
  edittext: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(14),
    color: COLORS.darkBrown,
    fontSize: ms(12),
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  rectangle: {
    width: ms(150),
    height: ms(200),
    backgroundColor: COLORS.white,
    marginTop: ms(10),
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 5,
    marginBottom: ms(10),
  },
  addicon: {
    marginTop: ms(70),
    alignSelf: 'center',
  },
  icontext: {
    marginBottom: ms(50),
    alignSelf: 'center',
  },
  productImage: {
    height: ms(100),
    width: ms(140),
    borderRadius: ms(10),
    alignSelf: 'center',
    marginTop: ms(10),
    marginBottom: ms(10),
    marginLeft: ms(10),
    marginRight: ms(10),
  },
  productname: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(14),
    color: COLORS.darkBrown,
    fontSize: ms(12),
    alignSelf: 'stretch',

    marginTop: ms(5),
    marginBottom: ms(5),
    marginLeft: ms(15),
    marginRight: ms(5),
  },
  productcategory: {
    fontFamily: fonts.Poppins['400'],
    lineHeight: ms(14),
    color: COLORS.gray,
    fontSize: ms(12),
    alignSelf: 'stretch',

    marginTop: ms(5),
    marginBottom: ms(5),
    marginLeft: ms(15),
    marginRight: ms(5),
  },
  productprice: {
    fontFamily: fonts.Poppins['500'],
    lineHeight: ms(14),
    color: COLORS.darkBrown,
    fontSize: ms(12),
    alignSelf: 'stretch',
    marginTop: ms(5),
    marginBottom: ms(5),
    marginLeft: ms(15),
    marginRight: ms(5),
  },
  productcard: {
    marginTop: ms(10),
    marginBottom: ms(10),
    borderRadius: ms(10),
    backgroundColor: COLORS.white,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.84,
    elevation: 5,
  },
});

export default DaftarJual;
