import {updateProfile} from '../../../helpers/auth';
import {setLoading} from '../../redux/reducer/globalAction';
import {showError, showSuccess} from '../../../utils/ShowMessage';

export const updateProfileSuccess = data => ({
  type: 'UPDATE_PROFILE_SUCCESS',
  payload: data,
});

export const updateProfileFail = error => ({
  type: 'UPDATE_PROFILE_FAIL',
  payload: error,
});

export const putDataProfile = (data, navigation) => async dispatch => {
  dispatch(setLoading(true));
  await updateProfile(data)
    .then(response => {
      dispatch(updateProfileSuccess(response.data));
      showSuccess('Update profile success');
      navigation.goBack();
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(updateProfileFail(err.response.data.message));
      showError(err.response.data.message);
      dispatch(setLoading(false));
    });
};

export const getProfile = payload => {
  return {
    type: 'GET_PROFILE',
    payload,
  };
};
