import validations from './validations';

export const isValidPassword = (password) => {
  return passwordCheck(password);
};

function passwordCheck(password, options) {
  let strength = 0,
    message = '',
    color = '#000';
  const numMatch = /(?=.*[0-9])/.test(password);
  const specialMatch = /(?=.*[!,%,&,@,#,$,^,*,?,_,~,<,>,])/.test(password);
  const lowerAlphaMatch = /(?=.*[a-z])/.test(password);
  const upperAlphaMatch = /(?=.*[A-Z])/.test(password);
  const matches = [numMatch, specialMatch, lowerAlphaMatch, upperAlphaMatch].filter(Boolean);
  if (matches.length < 2) {
    strength = 1;
    message = 'Very Weak';
    color = '#e71a1a';
  }

  if (matches.length === 2) {
    strength = 2;
    message = 'Weak';
    color = '#Fe3d1a';
  }

  if (matches.length === 3) {
    strength = 3;
    message = 'Average';
    color = '#e3cb00';
  }

  if (matches.length === 4) {
    strength = 4;
    message = 'Strong';
    color = '#006000';
  }

  if (matches.length === 5) {
    strength = 5;
    message = 'Very Strong';
    color = '#008000';
  }

  return {
    isValid: true,
    strength,
    message,
    color,
  };
}

export const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
};

export const validateForm = (user, labels) => {
  let isFormValid = true,
    errors = null;
  for (let field in user) {
    errors = {
      ...errors,
      [field]: '',
    };
    if (!user[field]) {
      errors = { ...errors, [field]: `${labels[field]} is required` };
      isFormValid = false;
      break;
    }
    if (
      user[field] &&
      validations[field].minLength &&
      user[field].length < validations[field].minLength
    ) {
      errors = {
        ...errors,
        [field]: `${labels[field]} should not be less than ${validations[field].minLength}`,
      };
      isFormValid = false;
      break;
    }
    if (user[field] && validations[field].email && !isValidEmail(user[field])) {
      errors = { ...errors, [field]: `${labels[field]} is not a valid email` };
      isFormValid = false;
      break;
    }
    if (user[field] && validations[field].password) {
      const { isValid, message, strength } = isValidPassword(user[field]);
      console.log('isValid, message, strength');
      console.log(isValid, message, strength);
      console.log('validations[field].strength');
      console.log(validations[field].strength);
      if (!isValid) {
        errors = { ...errors, [field]: `${labels[field]} ${message}` };
        isFormValid = false;
        break;
      } else if (strength < validations[field].strength) {
        errors = {
          ...errors,
          [field]: `${labels[field]} must contain any combination of alpha-numeric(lower or upper case), numeric and special characters`,
        };
        isFormValid = false;
        break;
      }
    }
    if (user[field] && validations[field].type === 'confirmPassword') {
      if (user.password !== user.confirmPassword) {
        errors = { ...errors, [field]: `${labels[field]} doesnot match` };
        isFormValid = false;
        break;
      }
    }
  }
  return { isFormValid, errors };
};

export const getTokenFromUrl = () => {
  let token = null;
  try {
    token = window.location.hash
      .split('?')
      .slice(1)[0]
      .replace(/token=/, '');
  } catch (err) {
    console.log(err, 'err');
  }
  return token;
};

export default { isValidEmail, isValidPassword, validateForm, getTokenFromUrl };
