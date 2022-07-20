import axios from 'axios';

export const getProfile = () => axios.get('/auth/user');
export const updateProfile = data =>
  axios.put('/auth/user', data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
