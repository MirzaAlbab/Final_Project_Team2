import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import {IconRemovePhoto} from '../../assets';

const Profile2 = ({isRemove, source, onPress}) => {
  console.log('Profile', isRemove);
  return (
    <View style={styles.photoSection}>
      {!isRemove ? (
        <View style={styles.photo}>
          <Image source={source} style={styles.avatar} />
        </View>
      ) : null}
      {isRemove ? (
        <TouchableOpacity style={styles.photo} onPress={onPress}>
          <Image source={source} style={styles.avatar} />
          {isRemove ? <IconRemovePhoto style={styles.removePhoto} /> : null}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default Profile2;
const styles = StyleSheet.create({
  photo: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.15,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  photoSection: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatar: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.15,
    alignSelf: 'center',
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
