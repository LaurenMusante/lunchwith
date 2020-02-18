import constants from './../constants';
const { initialState, types } = constants;

const userReducer = (state = initialState.currentUser, action) => {
  
  switch (action.type) {
    case types.LOGIN_USER:
      if (action.currentUser != null) {
        return {
					...state,
					id: action.currentUser['id'],
					firstName: action.currentUser['firstname'],
					lastName: action.currentUser['lastname'],
          email: action.currentUser['email'],
        };
      } else {
        return {
          ...state,
          id: null,
          firstName: null,
					lastName: null,
					email: null
        };
      }
    case types.LOGOUT_USER:
      return {
        ...state,
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        mentor: false,
        skills: [],
        address: null,
        bio: null
      }
      default:
        return state;
      }
    };

export default userReducer;
