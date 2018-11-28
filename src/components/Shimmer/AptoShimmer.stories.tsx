import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoShimmer from './AptoShimmer';
import './aptoShimmerStories.scss';

storiesOf('Shimmer', module)
  .add('Default', () =>
    <div className="shimmerStories">
      <AptoShimmer />
    </div>
  )
;
