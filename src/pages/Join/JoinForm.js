import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Button, MobileStepper } from "@material-ui/core";
import Card from "../../components/Card/Card";
import GeneralForm from "./GeneralForm";
import PersonalForm from "./PersonalForm";
import ContactForm from "./ContactForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userRegister } from "../../redux/actions/actions";
import { validate } from "./validations";
import Loading from "../../components/Loading/Loading";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  stepper: {
    flex: 1
  },
  cardActions: { padding: 0 },
  cardContent: { borderTop: "1px solid #DDD", padding: "0 20px 20px 20px" }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const JoinFormComponent = ({
  userRegister,
  isUserCreating,
  createUserSuccess,
  createUserErrorMessage
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [generalData, setGeneralData] = React.useState({
    firstName: { label: "First Name", value: "", validation: "required|alpha" },
    lastName: { label: "Last Name", value: "", validation: "required|alpha" },
    email: { label: "Email", value: "", validation: "required|email" },
    password: { label: "Password", value: "", validation: "required|alpha" },
    gender: { label: "Gender", value: "", validation: "required|alpha" }
  });
  const [personalData, setPersonalData] = React.useState({
    height: {
      label: "Height",
      value: "",
      validation: "required|numeric"
    },
    hairColor: { label: "Hair Color", value: "", validation: "required|alpha" },
    shirtSize: {
      label: "Shirt Size",
      value: "",
      validation: "required|numeric"
    },
    pantSize: {
      label: "Pant Size",
      value: "",
      validation: "required|numeric"
    },
    ethnicity: {
      label: "Ethnicity",
      value: "",
      validation: "required|alpha_num_dash"
    }
  });
  const [contactData, setContactData] = React.useState({
    homePhone: {
      label: "Home Phone",
      value: "",
      validation: "required|phone"
    },
    cellPhone: {
      label: "Cell Phone",
      value: "",
      validation: "required|phone"
    },
    zip: {
      label: "Zip",
      value: "",
      validation: "required|numeric"
    },
    heard: {
      label: "How you heard about us?",
      value: "",
      validation: "required|alpha_num_dash_space"
    }
  });
  const [errors, setErrors] = useState(null);
  const [error, setError] = useState(null);
  const [isFormFilled, setIsFormFilled] = useState(null);
  const handleChange = (data, setData, field, e) => {
    const fieldObj = Object.assign({}, data[field], { value: e.target.value });
    const newData = Object.assign({}, data, {
      [field]: fieldObj
    });
    setData(newData);
  };
  const handleBlur = () => {
    const formData = forms[activeStep].data;
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors(null);
    }
  };

  const forms = [
    {
      title: "General Details",
      component: GeneralForm,
      data: generalData,
      errors,
      onChange: handleChange.bind(null, generalData, setGeneralData),
      onBlur: handleBlur
    },
    {
      title: "Personal Details",
      component: PersonalForm,
      data: personalData,
      errors,
      onChange: handleChange.bind(null, personalData, setPersonalData),
      onBlur: handleBlur
    },
    {
      title: "Contact Details",
      component: ContactForm,
      data: contactData,
      errors,
      onChange: handleChange.bind(null, contactData, setContactData),
      onBlur: handleBlur
    }
  ];

  const maxSteps = forms.length;
  const FormComponent = forms[activeStep].component;
  const isSubmitEnabled = activeStep === maxSteps - 1;

  let fields = [];
  if (activeStep === 0) {
    fields = [...Object.values(generalData)];
  } else if (activeStep === 1) {
    fields = [...Object.values(generalData), ...Object.values(personalData)];
  } else {
    fields = [
      ...Object.values(generalData),
      ...Object.values(personalData),
      ...Object.values(contactData)
    ];
  }

  const getGenerateData = () => {
    let formObj = {};
    [
      ...Object.entries(generalData),
      ...Object.entries(personalData),
      ...Object.entries(contactData)
    ].forEach(entry => {
      formObj[entry[0]] = entry[1].value;
    });
    return formObj;
  };

  const handleNext = () => {
    const formData = forms[activeStep].data;
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (activeStep < forms.length - 1) {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      }
      const isFilled = checkIsFormFilled(fields);
      if (isFilled && isSubmitEnabled) {
        const formData = getGenerateData();
        userRegister(formData);
      }
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const checkIsFormFilled = (fields = []) => {
    const isFilled = fields.every(field => {
      const checkFilled =
        field.validation &&
        field.validation.includes("required") &&
        !!field.value;
      return checkFilled;
    });
    return isFilled;
  };

  React.useEffect(() => {
    const isFilled = checkIsFormFilled(fields);
    setIsFormFilled(isFilled);
  }, [fields]);

  const getFooter = () => {
    return (
      <MobileStepper
        classes={{ root: classes.stepper }}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={!isFormFilled}>
            {isSubmitEnabled ? "Submit" : "Next"}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    );
  };

  return (
    <Card
      title="Register"
      subtitle={forms[activeStep].title}
      getFooter={getFooter}
    >
      <Loading open={isUserCreating} />
      <FormComponent
        data={forms[activeStep].data}
        errors={forms[activeStep].errors}
        onChange={forms[activeStep].onChange}
        onBlur={forms[activeStep].onBlur}
      />

      {(createUserErrorMessage || error) && (
        <Alert severity="error" onClick={() => setError(null)}>
          {JSON.stringify(createUserErrorMessage) || error}
        </Alert>
      )}
    </Card>
  );
};

const JoinForm = connect(
  ({ isUserCreating, createUserSuccess, createUserErrorMessage }) => ({
    isUserCreating,
    createUserSuccess,
    createUserErrorMessage
  }),
  dispatch => ({ ...bindActionCreators({ userRegister }, dispatch) })
)(JoinFormComponent);

export default JoinForm;
