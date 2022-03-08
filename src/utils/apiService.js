import store from '@store/store';
import axios from 'axios';
import { apiBaseUrl } from './config';

axios.interceptors.request.use((config) => {
  // console.log(config);
  const token = store.getState().auth.accessToken;

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const loginService = (data) => {
  return axios.request({
    method: 'POST',
    url: apiBaseUrl + '/auth/login',
    data,
  });
};

export const logoutService = () => {
  return axios.request({
    method: 'POST',
    url: apiBaseUrl + '/auth/logout',
  });
};

// export const getUserService = userId => {
//   const options = {
//     method: 'GET',
//     url: apiBaseUrl + '/users/' + userId,
//     headers: { 'Content-Type': 'application/json' },
//   };
//   return axios.request(options);
// };

// export const updateUserService = (userId, data) => {
//   const options = {
//     method: 'POST',
//     url: apiBaseUrl + '/auth/register/' + userId,
//     headers: { 'Content-Type': 'application/json' },
//     data,
//   };
//   return axios.request(options);
// };

// export const deleteUserService = userId => {
//   const options = {
//     method: 'DELETE',
//     url: apiBaseUrl + '/users/' + userId,
//     headers: { 'Content-Type': 'application/json' },
//   };
//   return axios.request(options);
// };
