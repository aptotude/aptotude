import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoButton } from './AptoButton';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('Default', () => <AptoButton>Button</AptoButton>)
  .add('Primary', () =>
    <div>
      <AptoButton>Button</AptoButton>
      <br /><br />
      <AptoButton variant="primary">Button</AptoButton>
    </div>
  )
  .add('Danger', () => <AptoButton variant="danger">Button</AptoButton>)
  .add('Link Default Button', () =>  <AptoButton kind="link">Link Button</AptoButton>)
  .add('Link Primary Button', () =>
    <div>
      <AptoButton kind="link">Link Button</AptoButton>
      <br /><br />
      <AptoButton kind="link" variant="primary">Link Button</AptoButton>
    </div>
  )
  .add('Link Secondary Button', () => <AptoButton kind="link" variant="secondary">Link Button</AptoButton>)
  .add('Link Secondary Dark Button', () => <AptoButton kind="link" variant="secondaryDark">Link Button</AptoButton>)
  .add('Link Danger Button', () => <AptoButton kind="link" variant="danger">Link Button</AptoButton>)
  .add('Disabled', () =>  <AptoButton disabled>Button</AptoButton>)
  .add('Active', () =>  <AptoButton active>Button</AptoButton>)
  .add('Anchor Button', () =>
    <div>
      <AptoButton href="#">Button</AptoButton>
      <br /><br />
      <AptoButton href="http://google.com" target="_blank">Button</AptoButton>
    </div>
  )
  .add('Anchor Link Button', () =>
    <div>
      <AptoButton kind="link" href="#">Button</AptoButton>
      <br /><br />
      <AptoButton kind="link" href="http://google.com" target="_blank">Button</AptoButton>
    </div>
  )
  .add('Aria Label', () =>  <AptoButton title="some title">Button</AptoButton>)
  .add('Click Handler', () =>  <AptoButton onClick={action('button-click')}>Button</AptoButton>)
;
