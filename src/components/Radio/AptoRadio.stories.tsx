import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoForm } from '../Form';
import { AptoFormControlError } from '../FormControlError';
import { AptoRadio } from './AptoRadio';
import { SemanticUIStyle } from '../SemanticUIStyle';

storiesOf('Radio', module).add('Default', () => {
  return (
    <div>
      <SemanticUIStyle />
      <AptoForm>
        <AptoForm.Field>
          <AptoRadio label="Radio Field" />
        </AptoForm.Field>
        <AptoForm.Field>
          <AptoRadio error={true} label="Error Radio Field" />
          <AptoFormControlError error="This field is required" />
        </AptoForm.Field>
        <AptoForm.Field>
          <AptoRadio label="Disabled Radio Field" disabled={true} />
        </AptoForm.Field>
      </AptoForm>
      <br />
      <br />
      This is a Semantic-UI component. You can see more examples{' '}
      <a href="https://react.semantic-ui.com/addons/radio/">here</a>
    </div>
  );
});
