const validations = {
  name: {
    minLength: 8,
  },
  email: {
    email: true,
  },
  password: {
    minLength: 8,
    password: true,
    strength: 3,
  },
  confirmPassword: {
    minLength: 8,
    password: true,
    type: 'confirmPassword',
  },
};

export default validations;
