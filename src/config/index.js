const baseUrl = process.env.REACT_APP_API_URL || 'https://test.worklobster.com/api/v1';
console.log('baseUrl');
console.log(baseUrl);

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

export default config;
