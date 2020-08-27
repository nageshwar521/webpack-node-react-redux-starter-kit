import { Session } from 'bc-react-session';
import { authTypes } from '../actionTypes';
import { initialState } from '../initialState';
import { fetchApi } from '@services';
import config from '@config';

// const actionCreators = () => {
//   let obj = {};
//   Object.keys(authTypes).forEach(type => {
//     let typeName = type
//       .toLowerCase()
//       .replace(/[_]+(.)?/g, (letter, index) =>
//         letter ? letter.slice(1).toUpperCase() : '',
//       );

//     obj[typeName] = createAction(authTypes[type]);
//   });

//   return obj;
// };

// console.log(actionCreators());

// const registerRequest = () => {
//   return
// }

// const {
//   registerRequest,
//   registerSuccess,
//   registerFailure,
//   loginRequest,
//   loginSuccess,
//   loginFailure,
// } = actionCreators();

const registerRequest = () => {
  return {
    type: authTypes.REGISTER_REQUEST,
    payload: {
      createUserSuccess: null,
      createUserError: null,
    },
  };
};

const registerSuccess = (payload) => {
  return {
    type: authTypes.REGISTER_SUCCESS,
    payload,
  };
};

const registerFailure = (payload) => {
  return {
    type: authTypes.REGISTER_FAILURE,
    payload,
  };
};

const register = (data) => {
  console.log('register data');
  console.log(data);
  return (dispatch) => {
    registerRequest();
    const options = { method: 'post', body: JSON.stringify(data) };
    fetchApi(config.api.register, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log('register response');
        console.log(response);
        const { status, message } = response;
        if (status === 'success') {
          dispatch(registerSuccess({ createUserSuccess: message }));
        } else {
          dispatch(registerFailure({ createUserError: message }));
        }
      })
      .catch((error) => {
        console.log('register error');
        console.log(error);
        dispatch(registerFailure(error));
      });
  };
};

const loginRequest = () => {
  return {
    type: authTypes.LOGIN_REQUEST,
    payload: {
      loginSuccess: null,
      loginError: null,
    },
  };
};

const loginSuccess = (payload) => {
  return {
    type: authTypes.LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = (payload) => {
  return {
    type: authTypes.LOGIN_FAILURE,
    payload,
  };
};

const login = (data) => {
  return (dispatch) => {
    loginRequest();
    const options = { method: 'post', body: JSON.stringify(data) };
    fetchApi(config.api.login, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log('response');
        console.log(response);
        const { status, message, data } = response;
        if (status === 'success') {
          Session.start('worklobster_session', {
            payload: {
              userId: data.id,
              authToken: data.token,
            },
          });
          dispatch(loginSuccess({ loginSuccess: message }));
        } else {
          dispatch(loginFailure({ loginError: message }));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFailure({ loginError: error }));
      });
  };
};

const verifyUserRequest = () => {
  return {
    type: authTypes.VERIFY_USER_REQUEST,
    payload: {
      verificationUserSuccess: null,
      verificationUserError: null,
    },
  };
};

const verifyUserSuccess = (payload) => {
  return {
    type: authTypes.VERIFY_USER_SUCCESS,
    payload,
  };
};

const verifyUserFailure = (payload) => {
  return {
    type: authTypes.VERIFY_USER_FAILURE,
    payload,
  };
};

const verifyUser = (data) => {
  return (dispatch) => {
    verifyUserRequest();
    const options = { method: 'post', body: JSON.stringify(data) };
    fetchApi(config.api.verify, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const { status, message } = response;
        if (status === 'success') {
          dispatch(verifyUserSuccess({ verificationUserSuccess: message }));
        } else {
          dispatch(verifyUserFailure({ verificationUserError: message }));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(verifyUserFailure(error));
      });
  };
};

const resetPasswordRequest = () => {
  return {
    type: authTypes.RESET_PASSWORD_REQUEST,
    payload: {
      resetPasswordSuccess: null,
      resetPasswordError: null,
    },
  };
};

const resetPasswordSuccess = (payload) => {
  return {
    type: authTypes.RESET_PASSWORD_SUCCESS,
    payload,
  };
};

const resetPasswordFailure = (payload) => {
  return {
    type: authTypes.RESET_PASSWORD_FAILURE,
    payload,
  };
};

const resetPassword = (data) => {
  return (dispatch) => {
    resetPasswordRequest();
    const options = { method: 'post', body: JSON.stringify(data) };
    fetchApi(config.api.change, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const { status, message } = response;
        if (status === 'success') {
          dispatch(resetPasswordSuccess({ resetPasswordSuccess: message }));
        } else {
          dispatch(resetPasswordFailure({ resetPasswordError: message }));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(resetPasswordFailure(error));
      });
  };
};

const checkEmailExistRequest = () => {
  return {
    type: authTypes.CHECK_EMAIL_EXIST_REQUEST,
    payload: {
      checkEmailExistSuccess: null,
      checkEmailExistError: null,
    },
  };
};

const checkEmailExistSuccess = (payload) => {
  return {
    type: authTypes.CHECK_EMAIL_EXIST_SUCCESS,
    payload,
  };
};

const checkEmailExistFailure = (payload) => {
  return {
    type: authTypes.CHECK_EMAIL_EXIST_FAILURE,
    payload,
  };
};

const checkEmailExist = (data) => {
  return (dispatch) => {
    checkEmailExistRequest();
    const options = { method: 'post', body: JSON.stringify(data) };
    fetchApi(config.api.reset, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const { status, message } = response;
        if (status === 'success') {
          dispatch(checkEmailExistSuccess({ checkEmailExistSuccess: message }));
        } else {
          dispatch(checkEmailExistFailure({ checkEmailExistError: message }));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(checkEmailExistFailure(error));
      });
  };
};

const updateState = (obj) => {
  return (dispatch, getState) => {
    dispatch({ type: authTypes.UPDATE_STATE, payload: obj });
  };
};

const resetState = () => {
  return (dispatch, getState) => {
    dispatch({ type: authTypes.UPDATE_STATE, payload: initialState });
  };
};

const logout = () => {
  return (dispatch, getState) => {
    Session.destroy();
    dispatch({ type: authTypes.LOGOUT });
  };
};

const getUserRequest = () => {
  return {
    type: authTypes.GET_USER_REQUEST,
    payload: {
      getUserSuccess: null,
      getUserError: null,
    },
  };
};

const getUserSuccess = (payload) => {
  return {
    type: authTypes.GET_USER_SUCCESS,
    payload,
  };
};

const getUserFailure = (payload) => {
  return {
    type: authTypes.GET_USER_FAILURE,
    payload,
  };
};

const getUser = (userId) => {
  return (dispatch) => {
    getUserRequest();
    const options = { method: 'get' };
    fetchApi(config.api.user.replace('{userId}', userId), options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const { status, message, data } = response;
        if (status === 'success') {
          dispatch(getUserSuccess({ getUserSuccess: message }));
        } else {
          dispatch(getUserFailure({ getUserError: message }));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(getUserFailure(error));
      });
  };
};

export {
  register,
  login,
  verifyUser,
  resetPassword,
  checkEmailExist,
  updateState,
  resetState,
  logout,
  getUser,
};
