import React from 'react';
import { storiesOf } from '@storybook/react';
import AptoContainer from '../Container/AptoContainer';
import AptoRow from '../Row/AptoRow';
import AptoCol from '../Column/AptoCol';

import './gridStories.scss';

storiesOf('Grid', module)
  .add('Basic Usage', () => {
    return (
      <AptoContainer className="gridStories">
        <AptoRow>
          <AptoCol>1 of 3</AptoCol>
          <AptoCol>2 of 3</AptoCol>
          <AptoCol>3 of 3</AptoCol>
        </AptoRow>
      </AptoContainer>
    );
  })
  .add('One Column Width', () => {
    return (
      <AptoContainer className="gridStories">
        <AptoRow>
          <AptoCol>1 of 3</AptoCol>
          <AptoCol xs="6">2 of 3 (wider) (xs="6")</AptoCol>
          <AptoCol>3 of 3</AptoCol>
        </AptoRow>
      </AptoContainer>
    );
  })
  .add('Variable Width Content', () => {
    return (
      <AptoContainer className="gridStories">
        <AptoRow>
          <AptoCol>1 of 3</AptoCol>
          <AptoCol md="auto">Variable width content (md="auto")</AptoCol>
          <AptoCol>3 of 3</AptoCol>
        </AptoRow>
      </AptoContainer>
    );
  })
  .add('All Breakpoints', () => {
    return (
      <AptoContainer className="gridStories">
        <AptoRow>
          <AptoCol>col</AptoCol>
          <AptoCol>col</AptoCol>
          <AptoCol>col</AptoCol>
        </AptoRow>
        <AptoRow>
          <AptoCol xs="8">xs="8"</AptoCol>
          <AptoCol xs="4">xs="4"</AptoCol>
        </AptoRow>
      </AptoContainer>
    );
  })
  .add('Stacked To Horizontal', () => {
    return (
      <AptoContainer className="gridStories">
        <AptoRow>
          <AptoCol sm="true">sm="true"</AptoCol>
          <AptoCol sm="true">sm="true"</AptoCol>
          <AptoCol sm="true">sm="true"</AptoCol>
        </AptoRow>
        <AptoRow>
          <AptoCol sm="8">sm="8"</AptoCol>
          <AptoCol sm="4">sm="4"</AptoCol>
        </AptoRow>
      </AptoContainer>
    );
  })
  .add('Mix And Match', () => {
    return (
      <AptoContainer className="gridStories">
        <AptoRow>
          <AptoCol xs="12" sm="5" md="8" lg="6">xs="12" sm="5" md="8" lg="6"</AptoCol>
          <AptoCol xs="6" sm="7" md="4" lg="6">xs="6" sm="7" md="4" lg="6"</AptoCol>
        </AptoRow>
      </AptoContainer>
    );
  })
  .add('No Gutters', () => {
    return (
      <AptoContainer className="gridStories">
        <AptoRow noGutter>
          <AptoCol>1 of 3</AptoCol>
          <AptoCol>2 of 3</AptoCol>
          <AptoCol>3 of 3</AptoCol>
        </AptoRow>
      </AptoContainer>
    );
  })
  .add('Scrollable', () => {
    return (
      <div className="scrollableWrapper">
        <AptoContainer scroll >
          <AptoRow>
            <AptoCol className="scrollableHeight">1 of 3</AptoCol>
            <AptoCol className="scrollableHeight">2 of 3</AptoCol>
            <AptoCol className="scrollableHeight">3 of 3</AptoCol>
          </AptoRow>
        </AptoContainer>
      </div>
    );
  })
  .add('Fixed', () => {
    return (
      <AptoContainer fixed>
        <AptoRow>
          <AptoCol>1 of 3</AptoCol>
          <AptoCol>2 of 3</AptoCol>
          <AptoCol>3 of 3</AptoCol>
        </AptoRow>
      </AptoContainer>
    );
  })
;
