import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoFormControlError } from './AptoFormControlError';
import { AptoInput } from '../Input';
import { AptoForm } from '../Form/AptoForm';

storiesOf('Form Control Error', module).add('Default', () => (
  <AptoForm>
    <AptoForm.Field>
      <label>Form Field</label>
      <AptoInput error={true} />
      <AptoFormControlError error="This field is required" />
    </AptoForm.Field>
  </AptoForm>
));
