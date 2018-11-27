import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoTabs from './AptoTabs';
import AptoTab from '../Tab/AptoTab';

storiesOf('Tabs', module)
  .add('Basic Usage', () => {
    return (
      <div>
        <h1>Tabs</h1>
        <AptoTabs>
          <AptoTab title={
            (<strong><em>Tab 1</em></strong>)
          }>
            <a href="http://www.google.com">foo</a>
            Tab 1 Content
          </AptoTab>
          <AptoTab title="Tab 2">
            <div>
              <h1>things</h1>
              <p>Tab 2 Content</p>
            </div>
          </AptoTab>
        </AptoTabs>
        <br/>
        <br/>
        <AptoTabs>
          <AptoTab title="Tab 1">
            Tab 1 Content
          </AptoTab>
          <AptoTab title="Tab 2">
            Tab 2 Content
          </AptoTab>
        </AptoTabs>

      </div>
    );
  })
;
