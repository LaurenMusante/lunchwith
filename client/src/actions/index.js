import * as types from './../constants/ActionTypes';

// export function logInUser(currentUser) {
//     console.log('action:', currentUser);
//     return function (dispatch) {
//         dispatch(sendUserToRedux(currentUser));
//     }
// }

export const sendUserToRedux = (currentUser) => {
    return {
      type: types.LOGIN_USER,
      currentUser,
    };
    
  };
