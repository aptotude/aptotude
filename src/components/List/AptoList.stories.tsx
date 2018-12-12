import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoList from './AptoList';
import AptoListItem from '../ListItem/AptoListItem';

storiesOf('List', module)
  .add('Default', () =>
    <AptoList>
      <AptoListItem>A</AptoListItem>
      <AptoListItem>B</AptoListItem>
    </AptoList>
  )
  .add('Unordered List', () =>
    <AptoList type="ul">
      <AptoListItem type="li">A</AptoListItem>
      <AptoListItem type="li">B</AptoListItem>
    </AptoList>
  )
  .add('Ordered List', () =>
    <AptoList type="ol">
      <AptoListItem type="li">A</AptoListItem>
      <AptoListItem type="li">B</AptoListItem>
    </AptoList>
  )
  .add('Link List', () =>
    <AptoList>
      <AptoListItem link>Link A</AptoListItem>
      <AptoListItem link>Link B</AptoListItem>
      <AptoListItem link active>Active Link C</AptoListItem>
    </AptoList>
  )
;
