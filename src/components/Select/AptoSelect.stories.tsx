import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoForm } from '../Form';
import { AptoFormControlError } from '../FormControlError';
import { AptoSelect } from './AptoSelect';
import { SemanticUIStyle } from '../SemanticUIStyle';

storiesOf('Select', module).add('Default', () => {
  const options = [
    { key: 'al', text: 'Alabama', value: 'AL' },
    { key: 'ak', text: 'Alaska', value: 'AK' },
    { key: 'az', text: 'Arizona', value: 'AZ' },
    { key: 'ar', text: 'Arkansas', value: 'AR' },
    { key: 'ca', text: 'California', value: 'CA' },
    { key: 'co', text: 'Colorado', value: 'CO' },
    { key: 'ct', text: 'Connecticut', value: 'CT' },
    { key: 'de', text: 'Delaware', value: 'DE' },
    { key: 'dc', text: 'District of Columbia', value: 'DC' },
    { key: 'fl', text: 'Florida', value: 'FL' },
    { key: 'ga', text: 'Georgia', value: 'GA' },
    { key: 'hi', text: 'Hawaii', value: 'HI' },
    { key: 'id', text: 'Idaho', value: 'ID' },
    { key: 'il', text: 'Illinois', value: 'IL' },
    { key: 'in', text: 'Indiana', value: 'IN' },
    { key: 'ia', text: 'Iowa', value: 'IA' },
    { key: 'ks', text: 'Kansas', value: 'KS' },
    { key: 'ky', text: 'Kentucky', value: 'KY' },
    { key: 'la', text: 'Louisiana', value: 'LA' },
    { key: 'me', text: 'Maine', value: 'ME' },
    { key: 'md', text: 'Maryland', value: 'MD' },
    { key: 'ma', text: 'Massachusetts', value: 'MA' },
    { key: 'mi', text: 'Michigan', value: 'MI' },
    { key: 'mn', text: 'Minnesota', value: 'MN' },
    { key: 'ms', text: 'Mississippi', value: 'MS' },
    { key: 'mo', text: 'Missouri', value: 'MO' },
    { key: 'mt', text: 'Montana', value: 'MT' },
    { key: 'ne', text: 'Nebraska', value: 'NE' },
    { key: 'nv', text: 'Nevada', value: 'NV' },
    { key: 'nh', text: 'New Hampshire', value: 'NH' },
    { key: 'nj', text: 'New Jersey', value: 'NJ' },
    { key: 'nm', text: 'New Mexico', value: 'NM' },
    { key: 'ny', text: 'New York', value: 'NY' },
    { key: 'nc', text: 'North Carolina', value: 'NC' },
    { key: 'nd', text: 'North Dakota', value: 'ND' },
    { key: 'oh', text: 'Ohio', value: 'OH' },
    { key: 'ok', text: 'Oklahoma', value: 'OK' },
    { key: 'or', text: 'Oregon', value: 'OR' },
    { key: 'pa', text: 'Pennsylvania', value: 'PA' },
    { key: 'ri', text: 'Rhode Island', value: 'RI' },
    { key: 'sc', text: 'South Carolina', value: 'SC' },
    { key: 'sd', text: 'South Dakota', value: 'SD' },
    { key: 'tn', text: 'Tennessee', value: 'TN' },
    { key: 'tx', text: 'Texas', value: 'TX' },
    { key: 'ut', text: 'Utah', value: 'UT' },
    { key: 'vt', text: 'Vermont', value: 'VT' },
    { key: 'va', text: 'Virginia', value: 'VA' },
    { key: 'wa', text: 'Washington', value: 'WA' },
    { key: 'wv', text: 'West Virginia', value: 'WV' },
    { key: 'wi', text: 'Wisconsin', value: 'WI' },
    { key: 'wy', text: 'Wyoming', value: 'WY' }
  ];
  return (
    <div>
      <SemanticUIStyle />
      <AptoForm>
        <AptoForm.Field>
          <label>Select State</label>
          <AptoSelect options={options} placeholder="Select State" />
          <AptoFormControlError />
        </AptoForm.Field>

        <AptoForm.Field>
          <label>Select State (searchable)</label>
          <AptoSelect
            search={true}
            options={options}
            placeholder="Select State"
          />
          <AptoFormControlError error={undefined} />
        </AptoForm.Field>

        <AptoForm.Field>
          <label>Select State (error)</label>
          <AptoSelect
            selection
            options={options}
            error={true}
            placeholder="Select State"
          />
          <AptoFormControlError error="This field is required" />
        </AptoForm.Field>

        <AptoForm.Field>
          <label>Select State (disabled)</label>
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
