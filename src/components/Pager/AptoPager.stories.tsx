import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoPager } from './AptoPager';
import { action } from '@storybook/addon-actions';

storiesOf('Pager', module).add('Default', () => (
  <div>
    <AptoPager onClick={action('clicked page')} current={4} total={10} />
    <br />
    <AptoPager linkCount={15} current={10} total={100} />
  </div>
));
