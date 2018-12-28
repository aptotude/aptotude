import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoShimmerPlaceholder } from './AptoShimmerPlaceholder';
import './aptoShimmerPlaceholderStories.scss';

storiesOf('Shimmer', module)
  .add('Default', () =>
    <div className="shimmerStories">
      <AptoShimmerPlaceholder />
    </div>
  )
;
