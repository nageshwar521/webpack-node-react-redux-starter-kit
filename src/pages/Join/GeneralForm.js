import React from "react";
import { TextField } from "@material-ui/core";
import GenderField from "../../components/Form/GenderField";
import PasswordField from "../../components/Form/PasswordField";
import Field from "../../components/Form/Field";

const GeneralForm = ({ data, errors, onChange, onBlur }) => {
  return Object.keys(data).map((formKey, key) => {
    let FieldComponent = TextField;
    let extraProps = {};
    const { validation = "", ...fieldProps } = data[formKey];
    const required = validation.includes("required");
    switch (formKey) {
      case "password":
        FieldComponent = PasswordField;
        extraProps = { showStrength: true };
        break;
      case "gender":
        FieldComponent = GenderField;
        break;
      default:
        break;
    }
    return (
      <Field
        key={key}
        required={required}
        component={FieldComponent}
        onChange={onChange.bind(null, formKey)}
        onBlur={onBlur.bind(null, formKey)}
        error={errors && errors[formKey] ? true : false}
        helperText={errors && errors[formKey]}
        {...fieldProps}
        {...extraProps}
      />
    );
  });
};

export default GeneralForm;
