import React from "react";
import { TextField } from "@material-ui/core";
import HeardField from "../../components/Form/HeardField";
import Field from "../../components/Form/Field";

const ContactForm = ({ data, errors, onChange, onBlur }) => {
  return Object.keys(data).map((formKey, key) => {
    let FieldComponent = TextField;
    const { validation = "", ...fieldProps } = data[formKey];
    const required = validation.includes("required");
    switch (formKey) {
      case "heard":
        FieldComponent = HeardField;
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
      />
    );
  });
};

export default ContactForm;
