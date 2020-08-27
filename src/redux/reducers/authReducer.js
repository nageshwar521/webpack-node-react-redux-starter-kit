import { initialState } from '@redux/initialState';
import { authTypes } from '@redux/actionTypes';

export function authReducer(state = initialState, action) {
  console.log('auth action');
  console.log(action);
  switch (action.type) {
    case authTypes.REGISTER_REQUEST:
      return { ...state, ...action.payload, status: 'loading' };
    case authTypes.REGISTER_SUCCESS:
      return { ...state, ...action.payload, status: 'success' };
    case authTypes.REGISTER_FAILURE:
      return { ...state, ...action.payload, status: 'failure' };
    case authTypes.LOGIN_REQUEST:
      return { ...state, ...action.payload, status: 'loading' };
    case authTypes.LOGIN_SUCCESS:
      return { ...state, ...action.payload, status: 'success' };
    case authTypes.LOGIN_FAILURE:
      return { ...state, ...action.payload, status: 'failure' };
    case authTypes.VERIFY_USER_REQUEST:
      return { ...state, ...action.payload, status: 'loading' };
    case authTypes.VERIFY_USER_SUCCESS:
      return { ...state, ...action.payload, status: 'success' };
    case authTypes.VERIFY_USER_FAILURE:
      return { ...state, ...action.payload, status: 'failure' };
    case authTypes.CHECK_EMAIL_EXIST_REQUEST:
      return { ...state, ...action.payload, status: 'loading' };
    case authTypes.CHECK_EMAIL_EXIST_SUCCESS:
      return { ...state, ...action.payload, status: 'success' };
    case authTypes.CHECK_EMAIL_EXIST_FAILURE:
      return { ...state, ...action.payload, status: 'failure' };
    case authTypes.UPDATE_STATE:
      return { ...state, ...action.payload };
    case authTypes.RESET_STATE:
      return { ...state, ...action.payload };
    case authTypes.LOGOUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default authReducer;
