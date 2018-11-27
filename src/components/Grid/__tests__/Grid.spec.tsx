import React from 'react';
import renderer from 'react-test-renderer';
import AptoCol from '../../Column/AptoCol';
import AptoContainer from '../../Container/AptoContainer';
import AptoRow from '../../Row/AptoRow';

test('Grid renders', () => {
  const component = renderer.create(
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
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
