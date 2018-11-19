import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoShimmer from './AptoShimmer';
import AptoContainer from '../grid/AptoContainer';
import AptoRow from '../grid/AptoRow';
import AptoCol from '../grid/AptoCol';
import './shimmerStories.scss';

storiesOf('Shimmer Loader', module)
    .add('Basic Usage', () => {
        return (
            <AptoContainer className="shimmerStories">
                <AptoRow>
                    <AptoCol><AptoShimmer className="shimmer-story" /></AptoCol>
                    <AptoCol><AptoShimmer className="shimmer-story" /></AptoCol>
                </AptoRow>
                <AptoRow>
                    <AptoCol><AptoShimmer className="shimmer-story" /></AptoCol>
                    <AptoCol><AptoShimmer className="shimmer-story" /></AptoCol>
                </AptoRow>
            </AptoContainer>
        );
    })
;
