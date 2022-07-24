import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
    marginLeft: 40,
  },
  textHeader: {
    fontSize: moderateScale(25),
    color: COLORS.black,
    marginLeft: moderateScale(10),
    fontWeight: 'bold',
  },
  containerNotifBar: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(70),
  },
  footerComponent: {height: moderateScale(10)},
});
export default styles;
