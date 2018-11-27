import React from 'react';
import renderer from 'react-test-renderer';
import AptoSpinner from '../AptoSpinner';

test('Spinner renders', () => {
  const component = renderer.create(
    <AptoSpinner />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Spinner with no overlay renders', () => {
  const component = renderer.create(
    <AptoSpinner noOverlay />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Spinner with text renders', () => {
  const component = renderer.create(
    <AptoSpinner text="foo" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Spinner with text and no overlay renders', () => {
  const component = renderer.create(
    <AptoSpinner text="foo" noOverlay />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
