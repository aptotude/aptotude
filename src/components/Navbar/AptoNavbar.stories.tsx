import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoNavbar } from './AptoNavbar';
import './aptoNavbarStories.scss';
import { AptoButton } from "../Button";

storiesOf('Navbar', module)
    .add('Default', () =>
        <AptoNavbar>
            <AptoButton>Login</AptoButton>
        </AptoNavbar>
    )
    .add('Fixed', () =>
        <div className="navbarStoriesBody">
            <AptoNavbar>
                <AptoButton>Login</AptoButton>
            </AptoNavbar>
        </div>
);