import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoSpinner } from './AptoSpinner';
import './aptoSpinnerStories.scss';

storiesOf('Spinner', module)
  .add('Default', () =>
    <div className="loaderStory">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      <AptoSpinner />
    </div>
  )
  .add('Loading Text', () =>
    <div className="loaderStory">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      <AptoSpinner text="Loading Data..." />
    </div>
  )
  .add('No Overlay', () =>
    <div className="loaderStory minHeightLoaderStory">
      <AptoSpinner noOverlay text="No Overlay Spinner"/>
    </div>
  )
;
