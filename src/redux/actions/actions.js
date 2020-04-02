import * as types from "../types";
import { apiGet, apiPost } from "../../services/api";
import config from "../../config";
import history from "../../utils/history";
import Cookies from "js-cookie";

const userLoginRequest = () => {
  return { type: types.USER_LOGIN_REQUEST };
};
const userLoginSuccess = (payload) => {
  Cookies.set("auth_token", payload.jwt);
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload: {
      loginResponse: payload.message,
      authToken: payload.jwt,
    },
  };
};
const userLoginFailure = (error) => {
  return { type: types.USER_LOGIN_FAILURE, error };
};
export const userLogin = (options) => {
  return async (dispatch) => {
    dispatch(userLoginRequest());
    try {
      const response = await apiPost({
        url: config.baseURL + "/login.php",
        data: options,
      });
      dispatch(userLoginSuccess(response.data));
      history.replace("/");
    } catch (error) {
      dispatch(userLoginFailure(error));
    }
  };
};

const userRegisterRequest = () => {
  return { type: types.USER_REGISTER_REQUEST };
};
const userRegisterSuccess = (payload) => {
  return { type: types.USER_REGISTER_SUCCESS, payload };
};
const userRegisterFailure = (error) => {
  return { type: types.USER_REGISTER_FAILURE, error };
};
export const userRegister = (options) => {
  console.log("userRegister options");
  console.log(JSON.stringify(options));
  return async (dispatch) => {
    dispatch(userRegisterRequest());
    try {
      const response = await apiPost({
        url: config.baseURL + "/join.php",
        data: options,
      });
      console.log("join response client");
      console.log(response);
      dispatch(userRegisterSuccess({ updateResponse: response.data }));
    } catch (error) {
      console.log("join error client");
      console.log(error);
      dispatch(userRegisterFailure({ errorMessage: error }));
    }
  };
};

const updateUserRequest = () => {
  return { type: types.UPDATE_USER_REQUEST };
};
const updateUserSuccess = (payload) => {
  return { type: types.UPDATE_USER_SUCCESS, payload };
};
const updateUserFailure = (error) => {
  return { type: types.UPDATE_USER_FAILURE, error };
};
export const updateUser = (options) => {
  return (dispatch) => {
    dispatch(updateUserRequest());
  };
};

const deleteUserRequest = () => {
  return { type: types.DELETE_USER_REQUEST };
};
const deleteUserSuccess = (payload) => {
  return { type: types.DELETE_USER_SUCCESS, payload };
};
const deleteUserFailure = (error) => {
  return { type: types.DELETE_USER_FAILURE, error };
};
export const deleteUser = (options) => {
  return (dispatch) => {
    dispatch(deleteUserRequest());
  };
};

export default {
  userLogin,
  userRegister,
  updateUser,
  deleteUser,
};
