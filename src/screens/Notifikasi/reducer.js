const initialState = {
  user: null,
};

const NotifikasiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFIKASI':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default NotifikasiReducer;
