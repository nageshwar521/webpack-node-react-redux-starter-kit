import { Session } from 'bc-react-session';

export const getHeaders = (headers = {}) => {
  const { payload } = Session.get('worklobster_session');
  const authHeader = { Authorization: `${payload.authToken}` };
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  const newHeaders = { ...defaultHeaders, ...headers };
  const headersObj = { headers: newHeaders };
  console.log('headersObj');
  console.log(headersObj);
  return { ...authHeader, ...newHeaders };
};
