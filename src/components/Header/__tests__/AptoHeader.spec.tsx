import React from 'react';
import renderer from 'react-test-renderer';
import AptoHeader from '../AptoHeader';

test('Header renders', () => {
  const component = renderer.create(
    <AptoHeader />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Header sizes render', () => {
  const component = renderer.create(
    <div>
        <AptoHeader />
        <AptoHeader type="1" />
        <AptoHeader type="2" />
        <AptoHeader type="3" />
        <AptoHeader type="4" />
        <AptoHeader type="5" />
        <AptoHeader type="6" />
    </div>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
