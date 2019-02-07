import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoFileUpload } from './AptoFileUpload';
import { Formik } from 'formik';
import { AptoForm } from '../Form';

const Img = () => {
  return <div>some custom image thingy</div>;
};

storiesOf('File Upload', module)
  .add('Default', () => {
    return <AptoFileUpload name="somePhotoUrl" />;
  })
  .add('Previous Image State', () => {
    return (
      <AptoFileUpload
        name="somePhotoUrl"
        value="https://www.apto.com/hs-fs/hubfs/AptoLogo.png"
      />
    );
  })
  .add('With Formik', () => {
    const initialValues = {
      primary_photo_url: null
    };
    const submitHandler = (values: any) => {
      console.log(values);
    };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        render={({ setFieldValue, values }) => (
          <AptoForm>
            <AptoForm.Field>
              <label>Property Image</label>
              <AptoFileUpload
                value={values.primary_photo_url}
                name="primary_photo_url"
                onRemoveImage={() => setFieldValue('primary_photo_url', null)}
                onCancel={oldValue =>
                  setFieldValue('primary_photo_url', oldValue)
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
        render={({ setFieldValue, values }) => (
          <AptoForm>
            <AptoForm.Field>
              <label>Property Image</label>
              <AptoFileUpload
                value={values.primary_photo_url}
                name="primary_photo_url"
                onRemoveImage={() => setFieldValue('primary_photo_url', null)}
                onCancel={oldValue =>
                  setFieldValue('primary_photo_url', oldValue)
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
  .add('Custom Previous Image Component', () => {
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
        render={({ setFieldValue, values }) => (
          <AptoForm>
            <AptoForm.Field>
              <label>Property Image</label>
              <AptoFileUpload
                imageComponent={Img}
                value={values.primary_photo_url}
                name="primary_photo_url"
                onRemoveImage={() => setFieldValue('primary_photo_url', null)}
                onCancel={oldValue =>
                  setFieldValue('primary_photo_url', oldValue)
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
