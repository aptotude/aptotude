import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoForm } from '../Form';
import { AptoInput } from './AptoInput';
import { AptoFormControlError } from '../FormControlError';
import { SemanticUIStyle } from '../SemanticUIStyle';

storiesOf('Input', module).add('Default', () => (
  <div>
    <SemanticUIStyle />
    <AptoForm>
      <AptoForm.Field>
        <label>Form Field</label>
        <AptoInput error={true} placeholder="Enter Value" />
        <AptoFormControlError error="This field is required" />
      </AptoForm.Field>
      <AptoForm.Field>
        <label>Another Form Field</label>
        <AptoInput value="Some Value" />
        <AptoFormControlError error={undefined} />
      </AptoForm.Field>
      <AptoForm.Field>
        <label>Another Form Field</label>
        <AptoInput />
        <AptoFormControlError error={undefined} />
      </AptoForm.Field>
      <AptoForm.Field>
        <label>Disabled Form Field</label>
        <AptoInput placeholder="disabled" disabled={true} />
      </AptoForm.Field>
    </AptoForm>
    <br />
    <br />
    This is a Semantic-UI component. You can see more examples{' '}
    <a href="https://react.semantic-ui.com/elements/input/">here</a>
  </div>
));
