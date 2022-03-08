const baseUrl = process.env.REACT_APP_API_URL;

const config = {
  api: {
    register: `${baseUrl}/auth/register`,
    login: `${baseUrl}/auth/login`,
    verify: `${baseUrl}/auth/verify`,
    reset: `${baseUrl}/auth/password/reset`,
    change: `${baseUrl}/auth/password/change`,
    user: `${baseUrl}/users/{userId}`,
  },
  navigationType: 'hash',
};

export const apiBaseUrl = baseUrl;

export default config;
