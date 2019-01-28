import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoForm } from '../Form';
import { AptoFormControlError } from '../FormControlError';
import { SemanticUIStyle } from '../SemanticUIStyle';
import { AptoCheckbox } from './AptoCheckbox';

storiesOf('Checkbox', module).add('Default', () => {
  return (
    <div>
      <SemanticUIStyle />
      <AptoForm>
        <AptoForm.Field>
          <AptoCheckbox label="checkbox Field" />
        </AptoForm.Field>
        <AptoForm.Field>
          <AptoCheckbox error={true} label="Error checkbox Field" />
          <AptoFormControlError error="This field is required" />
        </AptoForm.Field>
        <AptoForm.Field>
          <AptoCheckbox label="Disabled checkbox Field" disabled={true} />
        </AptoForm.Field>
      </AptoForm>
      <br />
      <br />
      This is a Semantic-UI component. You can see more examples{' '}
      <a href="https://react.semantic-ui.com/addons/checkbox/">here</a>
    </div>
  );
});
