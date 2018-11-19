import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoLoader from './AptoLoader';

import './loaderStories.scss';

storiesOf('Spinner Loader', module)
    .add('Basic Usage', () => {
        return (
            <div className="loaderStories">
                <div className="loaderWrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    <AptoLoader text="Loading..."/>
                </div>
                <br /><br />
                <div className="loaderWrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    <AptoLoader/>
                </div>
                <br /><br />
                <div className="loaderWrapper minHeightLoaderWrapper">
                    <AptoLoader noOverlay text="No Overlay Loader"/>
                </div>
            </div>
        );
    })
;
