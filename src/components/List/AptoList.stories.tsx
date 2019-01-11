import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoList } from './AptoList';
import { AptoListItem } from '../ListItem/AptoListItem';
import { AptoCard } from '../Card/AptoCard';
import { AptoCardContent } from '../CardContent/AptoCardContent';
import { AptoCardHeader } from '../CardHeader/AptoCardHeader';

storiesOf('List', module)
  .add('Default', () => (
    <AptoList>
      <AptoListItem>A</AptoListItem>
      <AptoListItem>B</AptoListItem>
    </AptoList>
  ))
  .add('Unordered List', () => (
    <AptoList type="ul">
      <AptoListItem type="li">A</AptoListItem>
      <AptoListItem type="li">B</AptoListItem>
    </AptoList>
  ))
  .add('Ordered List', () => (
    <AptoList type="ol">
      <AptoListItem type="li">A</AptoListItem>
      <AptoListItem type="li">B</AptoListItem>
    </AptoList>
  ))
  .add('Link List', () => (
    <AptoList>
      <AptoListItem link>Link A</AptoListItem>
      <AptoListItem link>Link B</AptoListItem>
      <AptoListItem link active>
        Active Link C
      </AptoListItem>
    </AptoList>
  ))
  .add('Empty List', () => (
    <AptoList>
      <AptoListItem empty>Empty List</AptoListItem>
    </AptoList>
  ))
  .add('List In Card', () => (
    <React.Fragment>
      <AptoCard>
        <AptoCardHeader>List In Card</AptoCardHeader>
        <AptoCardContent>
          <AptoList>
            <AptoListItem>A</AptoListItem>
            <AptoListItem>B</AptoListItem>
          </AptoList>
        </AptoCardContent>
      </AptoCard>

      <AptoCard>
        <AptoCardHeader>Link List In Card</AptoCardHeader>
        <AptoCardContent>
          <AptoList>
            <AptoListItem link>A</AptoListItem>
            <AptoListItem link>B</AptoListItem>
          </AptoList>
        </AptoCardContent>
      </AptoCard>

      <AptoCard>
        <AptoCardHeader>Empty List In Card</AptoCardHeader>
        <AptoCardContent>
          <AptoList>
            <AptoListItem empty>Empty List</AptoListItem>
          </AptoList>
        </AptoCardContent>
      </AptoCard>
    </React.Fragment>
  ));
