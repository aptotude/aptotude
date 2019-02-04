import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoFileUpload } from './AptoFileUpload';
import { Formik } from 'formik';
import { AptoForm } from '../Form';

storiesOf('File Upload', module)
  .add('Default', () => {
    return <AptoFileUpload name="somePhotoUrl" />;
  })
  .add('Previous Image State', () => {
    return (
      <AptoFileUpload
        name="somePhotoUrl"
        previousPhotoUrl="https://www.apto.com/hs-fs/hubfs/AptoLogo.png"
      />
    );
  })
  .add('With Formik', () => {
    const previousPrimaryPhotoUrl = undefined;
    const initialValues = {};
    const submitHandler = (values: any) => {
      console.log(values);
    };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        render={({ setFieldValue }) => (
          <AptoForm>
            <AptoForm.Field>
              <label>Property Image</label>
              <AptoFileUpload
                previousPhotoUrl={previousPrimaryPhotoUrl || undefined}
                name="primary_photo_url"
                onRemoveImage={() => setFieldValue('primary_photo_url', null)}
                onCancel={() =>
                  setFieldValue(
                    'primary_photo_url',
                    previousPrimaryPhotoUrl || null
                  )
                }
                onDrop={acceptedFiles =>
                  setFieldValue('primary_photo_url', acceptedFiles[0])
                }
              />
            </AptoForm.Field>
          </AptoForm>
        )}
      />
    );
  })
  .add('With Formik And Previous Image', () => {
    const previousPrimaryPhotoUrl =
      'https://www.apto.com/hs-fs/hubfs/AptoLogo.png';
    const initialValues = {
      primary_photo_url: 'https://www.apto.com/hs-fs/hubfs/AptoLogo.png'
    };
    const submitHandler = (values: any) => {
      console.log(values);
    };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        render={({ setFieldValue }) => (
          <AptoForm>
            <AptoForm.Field>
              <label>Property Image</label>
              <AptoFileUpload
                previousPhotoUrl={previousPrimaryPhotoUrl || undefined}
                name="primary_photo_url"
                onRemoveImage={() => setFieldValue('primary_photo_url', null)}
                onCancel={() =>
                  setFieldValue(
                    'primary_photo_url',
                    previousPrimaryPhotoUrl || null
                  )
                }
                onDrop={acceptedFiles =>
                  setFieldValue('primary_photo_url', acceptedFiles[0])
                }
              />
            </AptoForm.Field>
          </AptoForm>
        )}
      />
    );
  });
