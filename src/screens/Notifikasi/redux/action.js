// import axios from 'axios';
// import {BASE_URL} from '../../../helpers/API';
// import {setLoading} from '../../redux/reducer/globalAction';

import {getNotif, detailNotif} from '../../../helpers/notifikasi';
import {showError} from '../../../utils/ShowMessage';
import {setLoading} from '../../redux/reducer/globalAction';

export const getNotifikasiSuccess = (data, read) => ({
  type: 'GET_NOTIFIKASI_SUCCESS',
  payload: data,
  read,
});

export const getNotifikasiFail = error => ({
  type: 'GET_NOTIFIKASI_FAIL',
  payload: error,
});

export const getNotifikasiLoading = data => ({
  type: 'GET_NOTIFIKASI_LOADING',
  payload: data,
});

export const read = data => ({
  type: 'READ',
  payload: data,
});

export const getNotifikasi = () => async dispatch => {
  dispatch(getNotifikasiLoading(true));
  await getNotif()
    .then(response => {
      const checkNotif = () => {
        for (let i = 0; i < response.data.length; i = +1) {
          if (response.data[i].read === false) {
            return false;
          }
        }
        return true;
      };
      dispatch(getNotifikasiSuccess(response.data, checkNotif()));
    })
    .catch(error => {
      dispatch(getNotifikasiFail(error.response.data.message));
    });
};

export const getNotifikasiIdSuccess = data => ({
  type: 'GET_NOTIFIKASI_ID_SUCCESS',
  payload: data,
});
export const getNotifikasiIdFail = data => ({
  type: 'GET_NOTIFIKASI_ID_FAIL',
  payload: data,
});
export const getNotifikasiIdLoading = data => ({
  type: 'GET_NOTIFIKASI_ID_LOADING',
  payload: data,
});

export const getNotifikasiId = id => async dispatch => {
  dispatch(getNotifikasiIdLoading(true));
  await detailNotif(id)
    .then(response => {
      dispatch(getNotifikasiIdSuccess(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(getNotifikasiFail(error));
      showError(error.response.data.message);
      dispatch(setLoading(false));
    });
};
