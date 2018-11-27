import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoSpinner from './AptoSpinner';
import './aptoSpinnerStories.scss';

storiesOf('Spinner', module)
    .add('Basic Usage', () => {
        return (
            <div className="loaderStories">
                <div className="loaderWrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    <AptoSpinner text="Loading..."/>
                </div>
                <br /><br />
                <div className="loaderWrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    <AptoSpinner/>
                </div>
                <br /><br />
                <div className="loaderWrapper minHeightLoaderWrapper">
                    <AptoSpinner noOverlay text="No Overlay Spinner"/>
                </div>
            </div>
        );
    })
;
