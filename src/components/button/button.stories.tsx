import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoButton from './AptoButton';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
    .add('with text', () => {
        return (
            <div>
                <AptoButton title="some title">Primary</AptoButton>
                <br/><br/>
                <AptoButton onClick={action('button-click')} title="some title">Primary Submit</AptoButton>
                <br/><br/>
                <AptoButton disabled onClick={action('button-click')}>Primary</AptoButton>
                <br/><br/>
                <AptoButton variant="danger" data-automation="foo">Danger</AptoButton>
                <br/><br/>
                <AptoButton kind="link">Primary Link</AptoButton>
                <br/><br/>
                <AptoButton kind="link" variant="secondary">Secondary Link</AptoButton>
                <br/><br/>
                <AptoButton kind="link" variant="secondaryDark">Secondary Dark Link</AptoButton>
                <br/><br/>
                <AptoButton kind="link" variant="danger">Danger Link</AptoButton>
                <br/><br/>
                <AptoButton disabled onClick={action('link-click')} href="#">Link Tag</AptoButton>
                <AptoButton href="http://google.com" target="_blank" kind="link" variant="danger">Link Tag</AptoButton>
            </div>
        );
    })


;