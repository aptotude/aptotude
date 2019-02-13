import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoButton } from './AptoButton';
import { action } from '@storybook/addon-actions';
import './aptoButtonStories.scss';

storiesOf('Button', module)
  .add('Default', () => (
    <div>
      <AptoButton>Button</AptoButton>
      <br />
      <br />
      <AptoButton disabled>Disabled Button</AptoButton>
      <br />
      <br />
      <AptoButton active> Active Button</AptoButton>
    </div>
  ))
  .add('Primary', () => (
    <div>
      <AptoButton variant="primary">Button</AptoButton>
      <br />
      <br />
      <AptoButton variant="primary" disabled>
        Disabled Button
      </AptoButton>
      <br />
      <br />
      <AptoButton variant="primary" active>
        Active Button
      </AptoButton>
    </div>
  ))
  .add('Primary Inverse', () => (
    <div>
      <AptoButton variant="primaryInverse">Button</AptoButton>
      <br />
      <br />
      <AptoButton variant="primaryInverse" disabled>
        Disabled Button
      </AptoButton>
      <br />
      <br />
      <AptoButton variant="primaryInverse" active>
        Active Button
      </AptoButton>
    </div>
  ))
  .add('White', () => (
    <div className="buttonStory whiteButton">
      <AptoButton variant="white">Button</AptoButton>
      <br />
      <br />
      <AptoButton variant="white" disabled>
        Disabled Button
      </AptoButton>
      <br />
      <br />
      <AptoButton variant="white" active>
        Active Button
      </AptoButton>
    </div>
  ))
  .add('Danger', () => (
    <div>
      <AptoButton variant="danger">Button</AptoButton>
      <br />
      <br />
      <AptoButton variant="danger" disabled>
        Disabled Button
      </AptoButton>
      <br />
      <br />
      <AptoButton variant="danger" active>
        Active Button
      </AptoButton>
    </div>
  ))
  .add('Link Default', () => (
    <div>
      <AptoButton kind="link">Link</AptoButton>
      <br />
      <br />
      <AptoButton kind="link" disabled>
        Disabled Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" active>
        Active Link
      </AptoButton>
      <br />
      <br />
    </div>
  ))
  .add('Link Primary', () => (
    <div>
      <AptoButton kind="link" variant="primary">
        Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" variant="primary" disabled>
        Disabled Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" variant="primary" active>
        Active Link
      </AptoButton>
      <br />
      <br />
    </div>
  ))
  .add('Link Secondary', () => (
    <div>
      <AptoButton kind="link" variant="secondary">
        Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" variant="secondary" disabled>
        Disabled Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" variant="secondary" active>
        Active Link
      </AptoButton>
      <br />
      <br />
    </div>
  ))
  .add('Link Secondary Dark', () => (
    <div>
      <AptoButton kind="link" variant="secondaryDark">
        Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" variant="secondaryDark" disabled>
        Disabled Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" variant="secondaryDark" active>
        Active Link
      </AptoButton>
      <br />
      <br />
    </div>
  ))
  .add('Link White', () => (
    <div className="buttonStory whiteButton">
      <AptoButton kind="link" variant="white">
        Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" variant="white" disabled>
        Disabled Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" variant="white" active>
        Active Link
      </AptoButton>
      <br />
      <br />
    </div>
  ))
  .add('Link Danger', () => (
    <div>
      <AptoButton kind="link" variant="danger">
        Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" variant="danger" disabled>
        Disabled Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" variant="danger" active>
        Active Link
      </AptoButton>
      <br />
      <br />
    </div>
  ))
  .add('Anchor Button', () => (
    <div>
      <AptoButton href="#">Button</AptoButton>
      <br />
      <br />
      <AptoButton href="http://google.com" target="_blank">
        Button With Href
      </AptoButton>
    </div>
  ))
  .add('Anchor Link', () => (
    <div>
      <AptoButton kind="link" href="#">
        Link
      </AptoButton>
      <br />
      <br />
      <AptoButton kind="link" href="http://google.com" target="_blank">
        Link With Href
      </AptoButton>
    </div>
  ))
  .add('Hold To Complete Action', () => (
    <div>
      <AptoButton hold onHold={action('button-hold')}>
        Hold To Delete
      </AptoButton>
      <br />
      <br />
      <AptoButton
        hold
        onHold={action('button-hold')}
        kind="link"
        variant="danger"
      >
        Hold To Delete
      </AptoButton>
    </div>
  ))

  .add('Aria Label', () => <AptoButton title="some title">Button</AptoButton>)
  .add('Click Handler', () => (
    <React.Fragment>
      <AptoButton onClick={action('button-click')}>Button</AptoButton>
      <br />
      <br />
      <AptoButton disabled onClick={action('button-click')}>
        Button
      </AptoButton>
    </React.Fragment>
  ))
  .add('Reach Router Link', () => (
    <React.Fragment>
      <p>
        Just add the "to" attribute to turn the button into a Reach Router link
      </p>
      <AptoButton to="/foo" title="some title">
        Button
      </AptoButton>
    </React.Fragment>
  ));
