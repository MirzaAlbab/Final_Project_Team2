import axios from 'axios';
import {BASE_URL} from './API';

export const updatePass = (current_password, new_password, confirm_password) =>
  axios.put(`${BASE_URL}/auth/change-password`, {
    current_password,
    new_password,
    confirm_password,
  });
