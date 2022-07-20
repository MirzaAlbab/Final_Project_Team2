import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import LoginReducer from '../../Login/redux/reducer';
import {notifikasiReducer} from '../../Notifikasi/redux/reducer';

export const allReducers = combineReducers({
  global: globalReducer,
  login: LoginReducer,
  dataNotifikasi: notifikasiReducer,
});
