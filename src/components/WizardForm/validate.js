import isValidEmail from 'sane-email-validation';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.sex) {
    errors.sex = 'Required';
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required';
  }
  return errors;
};

export default validate;
