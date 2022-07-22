const initialState = {
  user: null,
  token: '',
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        token: action.token,
      };

    case 'LOGOUT':
      return initialState;

    default:
      return state;
  }
};

export default LoginReducer;
