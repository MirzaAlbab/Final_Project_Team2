const initialUpdatePassState = {
  isSuccess: false,
  error: null,
};

export const gantiPassReducer = (
  state = initialUpdatePassState,
  action = {},
) => {
  switch (action.type) {
    case 'PUT_PASSWORD_SUCCESS':
      return {
        ...state,
        isSuccess: true,
        error: null,
      };
    case 'PUT_PASSWORD_FAIL':
      return {
        ...state,
        isSuccess: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return initialUpdatePassState;
    default:
      return state;
  }
};
