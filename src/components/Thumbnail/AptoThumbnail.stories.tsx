import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoThumbnail from './AptoThumbnail';

storiesOf('Thumbnail', module)
  .add('Default',  () =>
    <AptoThumbnail>
      <img src="https://broker.apto.com/images/Boston.jpg" alt="Boston" />
    </AptoThumbnail>
  )
;
