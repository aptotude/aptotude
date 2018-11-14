import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

addDecorator(
    withOptions({
        name: 'Aptotude Storybook',
        url: 'https://github.com/aptotude/aptotude'
    })
);

configure(loadStories, module);
