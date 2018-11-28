import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoCard from './AptoCard';
import AptoCardContent from '../CardContent/AptoCardContent';
import AptoCardHeader from '../CardHeader/AptoCardHeader';
import AptoCardFooter from '../CardFooter/AptoCardFooter';
import AptoButton from '../Button/AptoButton';

storiesOf('Card', module)
  .add('Default', () =>
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoButton kind="link">Left</AptoButton>
        <AptoButton kind="link">Right</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  )
  .add('No Header', () =>
    <AptoCard>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoButton kind="link">Left</AptoButton>
        <AptoButton kind="link">Right</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  )
  .add('No Footer', () =>
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
    </AptoCard>
  )
  .add('Right Footer Button', () =>
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoButton kind="link" className="AptoCardFooterButtonRight">Right</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  )
  .add('Left Footer Button', () =>
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
        <AptoButton kind="link">Left</AptoButton>
      </AptoCardFooter>
    </AptoCard>
  )
  .add('No Padding Content', () =>
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent noPadding>This is content</AptoCardContent>
      <AptoCardFooter>
          <AptoButton kind="link">Left</AptoButton>
        </AptoCardFooter>
    </AptoCard>
  )
  .add('Padded Bottom Header', () =>
    <AptoCard>
      <AptoCardHeader padBottom>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter>
          <AptoButton kind="link">Left</AptoButton>
        </AptoCardFooter>
    </AptoCard>
  )
  .add('Padded Top Footer', () =>
    <AptoCard>
      <AptoCardHeader>Card Header</AptoCardHeader>
      <AptoCardContent>This is content</AptoCardContent>
      <AptoCardFooter padTop>
          <AptoButton kind="link">Left</AptoButton>
        </AptoCardFooter>
    </AptoCard>
  )
;