import SimpleReactValidator from "simple-react-validator";

const validator = new SimpleReactValidator();
validator.showMessages();

export const validate = (formData) => {
  const result = {};
  Object.keys(formData).forEach((formKey) => {
    const isValid = validator.message(
      formKey,
      formData[formKey].value,
      formData[formKey].validation
    );
    if (isValid) {
      result[formKey] = isValid;
    }
  });
  return result;
};
