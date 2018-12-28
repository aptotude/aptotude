import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoShimmerPlaceholder } from './AptoShimmer';
import './aptoShimmerStories.scss';

storiesOf('Shimmer', module)
  .add('Default', () =>
    <div className="shimmerStories">
      <AptoShimmerPlaceholder />
    </div>
  )
;
