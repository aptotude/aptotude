import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoShimmer from './AptoShimmer';
import './aptoShimmerStories.scss';

storiesOf('Shimmer', module)
    .add('Basic Usage', () => {
        return (
            <div className="shimmerStories">
                <AptoShimmer className="shimmer-story" />
            </div>
        );
    })
;
