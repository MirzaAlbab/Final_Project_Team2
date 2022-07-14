import {combineReducers} from 'redux';
import globalReducer from './globalReducer';
import LoginReducer from '../../Login/redux/reducer';
import ProfileReducer from '../../ProfileScreen/redux/reducer';

export const allReducers = combineReducers({
  global: globalReducer,
  login: LoginReducer,
  profile: ProfileReducer,
});
