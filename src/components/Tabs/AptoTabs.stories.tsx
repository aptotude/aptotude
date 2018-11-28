import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoTabs from './AptoTabs';
import AptoTab from '../Tab/AptoTab';

storiesOf('Tabs', module)
  .add('Default', () =>
    <AptoTabs>
      <AptoTab title="Tab 1">
        Tab 1 Content
      </AptoTab>
      <AptoTab title="Tab 2">
        Tab 2 Content
      </AptoTab>
    </AptoTabs>
  )
  .add('Custom Tab Title', () =>
    <AptoTabs>
      <AptoTab title={(<em>Tab 1</em>)}>
        Tab 1 Content
      </AptoTab>
      <AptoTab title="Tab 2">
        Tab 2 Content
      </AptoTab>
    </AptoTabs>
  )
;
