const initialState = {
  user: null,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default LoginReducer;
