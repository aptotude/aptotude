import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoHeader } from './AptoHeader';

storiesOf('Header', module).add('Basic Usage', () => (
  <div>
    <AptoHeader type="1">Heading H1 (2.2 rem)</AptoHeader>
    <br />
    <AptoHeader transform={false} type="1">
      Heading H1 (1.8 rem) (noTransform
    </AptoHeader>
    <br />
    <AptoHeader type="2">Heading H2 (1.4 rem)</AptoHeader>
    <br />
    <AptoHeader type="3">Heading H3 (1.2 rem)</AptoHeader>
    <br />
    <AptoHeader type="4">Heading H4 (1 rem)</AptoHeader>
    <br />
    <AptoHeader type="5">Heading H5 (1 rem)</AptoHeader>
    <br />
    <AptoHeader type="6">Heading H6 (1 rem)</AptoHeader>
  </div>
));
