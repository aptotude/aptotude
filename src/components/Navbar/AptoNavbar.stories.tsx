import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoNavbar } from './AptoNavbar';
import './aptoNavbarStories.scss';
import { AptoButton } from "../Button";

storiesOf('Navbar', module)
    .add('Default', () =>
        <AptoNavbar>
            <AptoButton className="AptoNavbarItem--right">Login</AptoButton>
        </AptoNavbar>
    )
    .add('Fixed', () =>
        <div className="navbarStoriesBody">
            <AptoNavbar>
                <AptoButton className="AptoNavbarItem--right">Login</AptoButton>
            </AptoNavbar>
        </div>
);