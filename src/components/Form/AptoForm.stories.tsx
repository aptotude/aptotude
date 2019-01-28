import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoForm } from './AptoForm';
import { AptoButton } from '../Button';
import { AptoSelect } from '../Select';
import { AptoInput } from '../Input';
import { AptoTextArea } from '../TextArea';
import { AptoRadio } from '../Radio';
import { AptoCheckbox } from '../Checkbox';

storiesOf('Form', module)
  .add('Default', () => {
    const options = [
      { key: 'Colorado', value: 'co', text: 'Colorado' },
      { key: 'Utah', value: 'ut', text: 'Utah' }
    ];
    return (
      <AptoForm>
        <AptoForm.Field required>
          <label>Name</label>
          <AptoInput />
        </AptoForm.Field>
        <AptoForm.Field>
          <label>Last Name</label>
          <AptoInput />
        </AptoForm.Field>
        <AptoForm.Field required>
          <label>Email</label>
          <AptoInput type="email" />
        </AptoForm.Field>
        <AptoForm.Field required>
          <label>State</label>
          <AptoSelect placeholder="Select your country" options={options} />
        </AptoForm.Field>
        <AptoForm.Field>
          <AptoRadio label="Radio Field" />
        </AptoForm.Field>
        <AptoForm.Field>
          <AptoCheckbox label="Checkbox Field" />
        </AptoForm.Field>
        <AptoForm.Field required>
          <label>Message</label>
          <AptoTextArea />
        </AptoForm.Field>
        <AptoButton type="submit">Submit</AptoButton>
      </AptoForm>
    );
  })
  .add('Docs', () => {
    return (
      <div>
        This is a Semantic-UI component. You can see more examples{' '}
        <a href="https://react.semantic-ui.com/collections/form/">here</a>
      </div>
    );
  });
