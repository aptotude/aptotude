import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoAlert } from './AptoAlert';

storiesOf('Alerts', module).add('Info', () => (
  <div>
    <AptoAlert>Info</AptoAlert>
    <AptoAlert variant="warning">Warning</AptoAlert>
    <AptoAlert variant="danger">Danger</AptoAlert>
    <AptoAlert variant="success">Success</AptoAlert>
  </div>
));
