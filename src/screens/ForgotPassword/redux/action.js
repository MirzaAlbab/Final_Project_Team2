import {updatePass} from '../../../helpers/updatePass';
import {showError, showSuccess} from '../../../utils/ShowMessage';
import {setLoading} from '../../redux/reducer/globalAction';
export const gantiPassSuccess = data => ({
  type: 'PUT_PASSWORD_SUCCESS',
  payload: data,
});

export const gantiPassFail = data => ({
  type: 'PUT_PASSWORD_FAIL',
  payload: data,
});

export const gantiPass =
  (cur, newPass, confirmPass, navigation) => async dispatch => {
    await updatePass(cur, newPass, confirmPass)
      .then(res => {
        dispatch(gantiPassSuccess(res.data));
        showSuccess('Ganti Password Success');
        dispatch(setLoading(false));
        navigation.goBack();
      })
      .catch(err => {
        dispatch(gantiPassFail(err.response.data.message));
        showError(err.response.data.message);
        dispatch(setLoading(false));
      });
  };
