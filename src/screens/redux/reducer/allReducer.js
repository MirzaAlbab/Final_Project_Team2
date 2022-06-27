import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import LoginReducer from '../../Login/redux/reducer';

export const allReducers = combineReducers({
  global: globalReducer,
  login: LoginReducer,
});
