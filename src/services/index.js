import fetchTimeout from './fetchTimeout';
import { getHeaders } from './headers';

// const getOptions = (data, headers = {}) => {
//   return { ...getHeaders(headers), ...data };
// };

const fetchApi = (url, options = {}) => {
  const { headers = {}, ...otherOptions } = options;
  // const options = getOptions(data, headers);
  return fetchTimeout(url, { headers: getHeaders(headers), ...otherOptions });
};

// const registerApi = (data, headers = {}) => {
//   const options = getOptions(data, headers);
//   return fetchApi(config.register, options);
// };

// const loginApi = (data, headers = {}) => {
//   const options = getOptions(data, headers);
//   return fetchApi(config.login, options);
// };

// const verifyApi = (data, headers = {}) => {
//   const options = getOptions(data, headers);
//   return fetchApi(config.verify, options);
// };

// const changePasswordApi = (data, headers = {}) => {
//   const options = getOptions(data, headers);
//   return fetchApi(config.change, options);
// };

// const resetPasswordApi = (data, headers = {}) => {
//   const options = getOptions(data, headers);
//   return fetchApi(config.reset, options);
// };

// const userApi = (data, headers = {}) => {
//   const options = getOptions(data, headers);
//   return fetchApi(config.user, options);
// };

export { fetchApi };
