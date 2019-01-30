import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoErrorPage } from './AptoErrorPage';

storiesOf('Error Page', module)
  .add('400 Error Page', () => {
    return <AptoErrorPage type="400" />;
  })

  .add('404 Error Page', () => {
    return <AptoErrorPage type="404" />;
  })

  .add('403 Error Page', () => {
    return <AptoErrorPage type="403" />;
  })

  .add('500 Error Page', () => {
    return <AptoErrorPage type="500" />;
  })

  .add('Custom Text', () => {
    return (
      <AptoErrorPage type="400" title="Happy Cat" message="If I fits I sits" />
    );
  });
