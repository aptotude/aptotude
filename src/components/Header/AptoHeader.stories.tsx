import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoHeader from './AptoHeader';

storiesOf('Header', module)
    .add('Basic Usage', () => {
        return (
            <div>
                <AptoHeader type="1">Heading H1</AptoHeader>
                <AptoHeader type="2">Heading H2</AptoHeader>
                <AptoHeader type="3">Heading H3</AptoHeader>
                <AptoHeader type="4">Heading H4</AptoHeader>
                <AptoHeader type="5">Heading H5</AptoHeader>
                <AptoHeader type="6">Heading H6</AptoHeader>
            </div>
        );
    })
;
