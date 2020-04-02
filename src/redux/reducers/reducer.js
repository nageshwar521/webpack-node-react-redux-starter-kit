import * as types from "../types";
// console.log("our user", localStorage.getItem("user"));
// console.log("our user --> jwt: ", localStorage.getItem("jwt"));

export const initialState = {
  isLoginLoading: false,
  loginSuccess: null,
  isLoggedIn: false,
  authToken: null,
  loginErrorMessage: null,
  isLogoutLoading: false,
  logoutSuccess: null,
  logoutErrorMessage: null,
  isUserFetching: false,
  user: null,
  fetchUserSuccess: null,
  userErrorMessage: null,
  isUserCreating: false,
  createUserSuccess: null,
  createUserErrorMessage: null,
  isUserUpdating: false,
  updateUserSuccess: null,
  updateUserErrorMessage: null,
  isUserDeleting: false,
  deleteUserSuccess: null,
  deleteUserErrorMessage: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST: {
      return Object.assign({}, state, {
        isLoginLoading: true,
      });
    }
    case types.USER_LOGIN_SUCCESS: {
      const { loginResponse, authToken } = action.payload;
      return Object.assign({}, state, {
        loginSuccess: loginResponse,
        isLoggedIn: true,
        authToken: authToken,
        isLoginLoading: false,
      });
    }
    case types.USER_LOGIN_FAILURE: {
      const { errorMessage } = action.error;
      return Object.assign({}, state, {
        loginErrorMessage: errorMessage,
        isLoginLoading: false,
      });
    }
    case types.USER_LOGOUT_REQUEST: {
      return Object.assign({}, state, {
        isLogoutLoading: true,
      });
    }
    case types.USER_LOGOUT_SUCCESS: {
      const { logoutResponse } = action.payload;
      return Object.assign({}, state, {
        logoutSuccess: logoutResponse,
        isLoggedIn: false,
        authToken: null,
        isLogoutLoading: false,
      });
    }
    case types.USER_LOGOUT_FAILURE: {
      const { errorMessage } = action.error;
      return Object.assign({}, state, {
        logoutErrorMessage: errorMessage,
        isLogoutLoading: false,
      });
    }
    case types.GET_USER_REQUEST: {
      return Object.assign({}, state, {
        isUserFetching: true,
      });
    }
    case types.GET_USER_SUCCESS: {
      const { user } = action.payload;
      return Object.assign({}, state, {
        user: user,
        isUserFetching: false,
      });
    }
    case types.GET_USER_FAILURE: {
      const { errorMessage } = action.error;
      return Object.assign({}, state, {
        userErrorMessage: errorMessage,
        isUserFetching: false,
      });
    }
    case types.USER_REGISTER_REQUEST: {
      return Object.assign({}, state, {
        isUserCreating: true,
      });
    }
    case types.USER_REGISTER_SUCCESS: {
      const { updateResponse } = action.payload;
      return Object.assign({}, state, {
        createUserSuccess: updateResponse,
        isUserCreating: false,
      });
    }
    case types.USER_REGISTER_FAILURE: {
      const { errorMessage } = action.error;
      return Object.assign({}, state, {
        createUserErrorMessage: errorMessage,
        isUserCreating: false,
      });
    }
    case types.UPDATE_USER_REQUEST: {
      return Object.assign({}, state, {
        isUserUpdating: true,
      });
    }
    case types.UPDATE_USER_SUCCESS: {
      const { updateResponse } = action.payload;
      return Object.assign({}, state, {
        updateUserSuccess: updateResponse,
        isUserUpdating: false,
      });
    }
    case types.UPDATE_USER_FAILURE: {
      const { errorMessage } = action.error;
      return Object.assign({}, state, {
        updateUserErrorMessage: errorMessage,
        isUserUpdating: false,
      });
    }
    case types.DELETE_USER_REQUEST: {
      return Object.assign({}, state, {
        isUserDeleting: true,
      });
    }
    case types.DELETE_USER_SUCCESS: {
      const { deleteResponse } = action.payload;
      return Object.assign({}, state, {
        deleteUserSuccess: deleteResponse,
        isUserDeleting: false,
      });
    }
    case types.DELETE_USER_FAILURE: {
      const { errorMessage } = action.error;
      return Object.assign({}, state, {
        deleteUserErrorMessage: errorMessage,
        isUserDeleting: false,
      });
    }
    default:
      return state;
  }
}
