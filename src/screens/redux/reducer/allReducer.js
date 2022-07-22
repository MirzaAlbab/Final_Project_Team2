import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import LoginReducer from '../../Login/redux/reducer';
import {profileReducer} from '../../ProfileScreen/redux/reducer';

import NotificationReducer from '../../Notifikasi/redux/reducer';
import {gantiPassReducer} from '../../ForgotPassword/redux/reducer';


export const allReducers = combineReducers({
  global: globalReducer,
  login: LoginReducer,
  profile: profileReducer,

  dataNotifikasi: NotificationReducer,
  dataGantiPass: gantiPassReducer,

});
