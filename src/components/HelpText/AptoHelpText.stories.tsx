import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoHelpText from './AptoHelpText';

storiesOf('Help Text', module)
  .add('Default', () =>
    <div>
      <input type="text" />
      <AptoHelpText>Help Me</AptoHelpText>
    </div>
  )
  .add('Inline', () =>
    <div>
      <input type="text" />
      <AptoHelpText inline>Help Me</AptoHelpText>
    </div>
  )
  .add('Error', () =>
    <div>
      <input type="text" />
      <AptoHelpText error>Help Me</AptoHelpText>
    </div>
  )
;
