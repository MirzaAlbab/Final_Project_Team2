import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import CardList from '../../components/CardList';
import Headers from '../../components/Headers';
import {Profile2} from '../../components';
import {ms} from 'react-native-size-matters';
import {COLORS} from '../../utils';

function PengaturanScreen({navigation}) {
  const profile = useSelector(state => state.profile);

  return (
    <View style={styles.pages}>
      <Headers
        title="Pengaturan Akun"
        type="back-title"
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.menu}>
        <Profile2 source={{uri: profile.profile?.image_url}} />
        <CardList
          type="account"
          name="key"
          title="Ganti Password"
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        />
      </ScrollView>
    </View>
  );
}

export default PengaturanScreen;

const styles = StyleSheet.create({
  menu: {
    marginHorizontal: ms(10),
  },
});
