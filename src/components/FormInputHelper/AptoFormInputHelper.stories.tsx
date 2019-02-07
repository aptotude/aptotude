import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoFormInputHelper } from './AptoFormInputHelper';
import { AptoForm } from '../Form/AptoForm';
import { Formik } from 'formik';

const doChangeStuff = () => {
  // hi;
};

storiesOf('Input Helper', module)
  .add('Default', () => (
    <AptoForm>
      <AptoFormInputHelper
        label="Cat Name"
        name="cat_name"
        value="dave"
        error={undefined}
        change={doChangeStuff}
      />
    </AptoForm>
  ))
  .add('With Error', () => (
    <AptoForm>
      <AptoFormInputHelper
        label="Cat Name"
        name="cat_name"
        value=""
        required={true}
        error="'cat name is required"
        change={doChangeStuff}
      />
    </AptoForm>
  ))
  .add('With Formik', () => {
    const initialValues = {
      cat_name: 'dave'
    };
    const submitHandler = () => {
      // wee
    };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        render={({ values, errors, handleChange, handleSubmit }) => (
          <AptoForm onSubmit={handleSubmit}>
            <AptoFormInputHelper
              label="Cat Name"
              name="cat_name"
              value={values.cat_name}
              required={true}
              error={errors.cat_name}
              change={handleChange}
            />
          </AptoForm>
        )}
      />
    );
  });
