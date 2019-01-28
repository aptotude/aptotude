import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoForm } from '../Form';
import { AptoFormControlError } from '../FormControlError';
import { SemanticUIStyle } from '../SemanticUIStyle';
import { AptoTextArea } from './AptoTextArea';

storiesOf('TextArea', module).add('Default', () => (
  <div>
    <SemanticUIStyle />
    <AptoForm>
      <AptoForm.Field>
        <label>Another Form Field</label>
        <AptoTextArea value="some text is in here" />
      </AptoForm.Field>
      <AptoForm.Field>
        <label>Another Form Field</label>
        <AptoTextArea />
        <AptoFormControlError error={undefined} />
      </AptoForm.Field>
      <AptoForm.Field>
        <label>Form Field</label>
        <AptoTextArea error={true} placeholder="Enter Value" />
        <AptoFormControlError error="This field is required" />
      </AptoForm.Field>
      <AptoForm.Field>
        <label>Disabled Form Field</label>
        <AptoTextArea placeholder="disabled" disabled={true} />
      </AptoForm.Field>
    </AptoForm>
    <br />
    <br />
    This is a Semantic-UI component. You can see more examples{' '}
    <a href="https://react.semantic-ui.com/elements/input/">here</a>
  </div>
));
