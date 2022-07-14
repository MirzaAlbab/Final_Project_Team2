const initialStateUpdateProfile = {
  profile: {},
};

const ProfileReducer = (state = initialStateUpdateProfile, action = {}) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default ProfileReducer;
