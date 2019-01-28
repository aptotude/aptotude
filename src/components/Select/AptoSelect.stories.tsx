import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoForm } from '../Form';
import { AptoFormControlError } from '../FormControlError';
import { AptoSelect } from './AptoSelect';
import { SemanticUIStyle } from '../SemanticUIStyle';

storiesOf('Select', module).add('Default', () => {
  const options = [
    { key: '0', value: '', text: 'Choose' },
    { key: '1', value: '1', text: 'Item 1' },
    { key: '2', value: '2', text: 'Item 2' },
    { key: '3', value: '3', text: 'Item 3' },
    { key: '4', value: '4', text: 'Item 4' },
    { key: '5', value: '5', text: 'Item 4' }
  ];
  return (
    <div>
      <SemanticUIStyle />
      <AptoForm>
        <AptoForm.Field>
          <label>Form Field</label>
          <AptoSelect options={options} value="1" placeholder="Enter Value" />
          <AptoFormControlError />
        </AptoForm.Field>
        <AptoForm.Field>
          <label>Form Field</label>
          <AptoSelect options={options} placeholder="Enter Value" />
          <AptoFormControlError error={undefined} />
        </AptoForm.Field>
        <AptoForm.Field>
          <label>Error Form Field</label>
          <AptoSelect
            options={options}
            error={true}
            placeholder="Enter Value"
          />
          <AptoFormControlError error="This field is required" />
        </AptoForm.Field>
        <AptoForm.Field>
          <label>Disabled Field</label>
          <AptoSelect
            disabled={true}
            options={options}
            placeholder="Enter Value"
          />
        </AptoForm.Field>
      </AptoForm>
      <br />
      <br />
      This is a Semantic-UI component. You can see more examples{' '}
      <a href="https://react.semantic-ui.com/addons/select/">here</a>
    </div>
  );
});
