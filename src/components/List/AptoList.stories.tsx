import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoList from './AptoList';

storiesOf('List', module)
  .add('Default', () =>
    <AptoList>
      <div>A</div>
      <div>B</div>
    </AptoList>
  )
  .add('Unordered List', () =>
    <AptoList type="ul">
      <li>A</li>
      <li>B</li>
    </AptoList>
  )
  .add('Ordered List', () =>
    <AptoList type="ol">
      <li>A</li>
      <li>B</li>
    </AptoList>
  )
;
