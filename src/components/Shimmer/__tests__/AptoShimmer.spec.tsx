import React from 'react';
import renderer from 'react-test-renderer';
import AptoShimmer from '../AptoShimmer';

test('Shimmer renders', () => {
  const component = renderer.create(
    <AptoShimmer />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

