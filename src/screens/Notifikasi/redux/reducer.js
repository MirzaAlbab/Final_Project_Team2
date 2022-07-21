const initialState = {
  dataNotification: [],
  detailNotification: {},
  refreshing: false,
};

const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return {
        ...state,
        dataNotification: action.payload,
      };

    case 'DETAIL_NOTIFICATION':
      return {
        ...state,
        detailNotification: action.detail,
      };

    case 'SET_REFRESHING':
      return {
        ...state,
        refreshing: action.payload,
      };

    default:
      return {...state};
  }
};
export default NotificationReducer;

// const initialNotifikasiState = {
//   notifikasi: [],
//   isSuccess: false,
//   error: null,
//   loading: false,
//   notifById: {},
//   read: true,
// };

// export const notifikasiReducer = (
//   state = initialNotifikasiState,
//   action = {},
// ) => {
//   switch (action.type) {
//     case 'GET_NOTIFIKASI_SUCCESS':
//       return {
//         ...state,
//         notifikasi: action.payload,
//         isSuccess: true,
//         error: null,
//         loading: false,
//         read: action.read,
//       };
//     case 'GET_NOTIFIKASI_FAIL':
//       return {
//         ...state,
//         isSuccess: false,
//         error: action.payload,
//         loading: false,
//       };
//     case 'GET_NOTIFIKASI_LOADING':
//       return {
//         ...state,
//         loading: action.payload,
//       };
//     case 'GET_NOTIFIKASI_ID_SUCCESS':
//       return {
//         ...state,
//         notifById: action.payload,
//         isSuccess: true,
//         error: null,
//       };
//     case 'GET_NOTIFIKASI_ID_FAIL':
//       return {
//         ...state,
//         isSuccess: false,
//         error: action.payload,
//       };
//     case 'GET_NOTIFIKASI_ID_LOADING':
//       return {
//         ...state,
//         loading: action.payload,
//       };

//     case 'LOGOUT':
//       return initialNotifikasiState;
//     default:
//       return state;
//   }
// };

// const initialState = {
//   user: null,
// };

// const NotifikasiReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_NOTIFIKASI':
//       return {
//         ...state,
//         user: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default NotifikasiReducer;
