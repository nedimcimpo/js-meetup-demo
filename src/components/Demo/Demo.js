import React from 'react';
import { Field, reduxForm } from 'redux-form';
import isValidEmail from 'sane-email-validation';
import showResults from './showResults';
import cities from '../../data/cities';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Proba';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid Email';
  }
  return errors;
};

const createRenderer = render => ({ input, meta, label, ...rest }) => (
  <div>
    <label>{label}</label>
    <div>
      {render(input, label, rest)}
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  </div>
);
const RenderInput = createRenderer((input, label) => <input {...input} placeholder={label} />);
const RenderSelect = createRenderer((input, label, { children }) => <select {...input}>{children}</select>);

let Demo = ({ handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit(showResults)}>
      <Field name="firstName" label="First Name" component={RenderInput} />
      <Field name="lastName" label="Last Name" component={RenderInput} />
      <Field name="email" label="Email" component={RenderInput} />
      <Field name="city" label="City" component={RenderSelect}>
        <option />
        {cities.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Field>
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

Demo = reduxForm({
  form: 'example',
  validate
})(Demo);

export default Demo;
