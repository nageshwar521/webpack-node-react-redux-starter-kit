import axios from "axios";
import config from "../config";

// delete axios.defaults.headers.common["X-Requested-With"];

const axiosCustom = axios.create({
  baseURL: config.baseURL,
  timeout: 30000,
});

// axiosCustom.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axiosCustom.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const getHeaders = (headers) => {
  const defaultHeaders = {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  // console.log("getHeaders");
  return Object.assign({}, defaultHeaders, headers);
};

export const apiGet = ({ endpoint, headers, params = {}, data = {} }) => {
  const options = {
    method: "get",
    url: endpoint,
    headers: getHeaders(headers),
    data: data,
  };
  // console.log("options");
  // console.log(JSON.stringify(options));
  return axiosCustom(options);
};

export const apiPost = ({ endpoint, headers, params = {}, data = {} }) =>
  axiosCustom({
    method: "post",
    url: endpoint,
    headers: getHeaders(headers),
    params,
    data,
  });

export const apiPut = ({ endpoint, headers, params = {}, data = {} }) =>
  axiosCustom({
    method: "put",
    url: endpoint,
    headers: getHeaders(headers),
    params,
    data,
  });

export const apiDelete = ({ endpoint, headers, params = {}, data = {} }) =>
  axiosCustom({
    method: "delete",
    url: endpoint,
    headers: getHeaders(headers),
    params,
    data,
  });

export default {
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
};
