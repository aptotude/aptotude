import React from 'react';
import { render } from 'react-testing-library';
import { AptoCol } from '../../Column/AptoCol';
import { AptoContainer } from '../../Container/AptoContainer';
import { AptoRow } from '../../Row/AptoRow';

describe('Grid Component', () => {
  it('Grid renders', () => {
    const { container } = render(
      <AptoContainer>
        <AptoRow>
          <AptoCol>Foo</AptoCol>
          <AptoCol>Bar</AptoCol>
        </AptoRow>
        <AptoRow>
          <AptoCol>Baz</AptoCol>
          <AptoCol>Maz</AptoCol>
        </AptoRow>
      </AptoContainer>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
