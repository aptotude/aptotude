import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoPager } from './AptoPager';
import { action } from '@storybook/addon-actions';

storiesOf('Pager', module)
  .add('Default', () => (
    <AptoPager onClick={action('clicked page')} current={4} total={10} />
  ))
  .add('No Next/Prev', () => (
    <AptoPager nextPrev={false} current={4} total={10} />
  ))
  .add('Just Next/Prev', () => (
    <AptoPager pages={false} linkCount={15} current={10} total={100} />
  ))
  .add('Change Link count', () => (
    <AptoPager linkCount={15} current={10} total={100} />
  ));
