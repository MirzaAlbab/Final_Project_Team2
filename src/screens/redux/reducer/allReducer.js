import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import LoginReducer from '../../Login/redux/reducer';
import NotifikasiReducer from '../../Notifikasi/reducer';

export const allReducers = combineReducers({
  global: globalReducer,
  login: LoginReducer,
  dataNotifikasi: NotifikasiReducer,
});
