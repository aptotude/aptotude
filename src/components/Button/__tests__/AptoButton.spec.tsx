import React from 'react';
import renderer from 'react-test-renderer';
import AptoButton from '../AptoButton';

test('Button renders', () => {
  const component = renderer.create(
    <AptoButton />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button children render', () => {
  const component = renderer.create(
    <AptoButton>Foo</AptoButton>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Primary Button renders', () => {
  const component = renderer.create(
    <AptoButton variant="primary" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Secondary Button renders', () => {
  const component = renderer.create(
    <AptoButton variant="secondary" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('SecondaryDark Button renders', () => {
  const component = renderer.create(
    <AptoButton variant="secondaryDark" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Danger Button renders', () => {
  const component = renderer.create(
    <AptoButton variant="danger" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Link button renders', () => {
  const component = renderer.create(
    <AptoButton kind="link" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button button renders', () => {
  const component = renderer.create(
    <AptoButton kind="button" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Secondary Link button renders', () => {
  const component = renderer.create(
    <AptoButton kind="link" variant="secondary" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Disabled button renders', () => {
  const component = renderer.create(
    <AptoButton disabled />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Active button renders', () => {
  const component = renderer.create(
    <AptoButton active />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Anchor renders with role attribute', () => {
  const component = renderer.create(
    <AptoButton href="#" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Anchor renders without role', () => {
  const component = renderer.create(
    <AptoButton href="http://www.google.com" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Anchor target renders', () => {
  const component = renderer.create(
    <AptoButton href="#" target="_blank" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Disabled anchor renders', () => {
  const component = renderer.create(
    <AptoButton href="#" disabled />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Active anchor renders', () => {
  const component = renderer.create(
    <AptoButton active href="#" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Aria Label attribute renders', () => {
  const component = renderer.create(
    <AptoButton title="some title" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button is clickable', () => {
  const onClick = jest.fn();
  const component = renderer.create(
    <AptoButton onClick={onClick}>Click</AptoButton>
  );
  const tree = component.toJSON();
  if (tree) {
    tree.props.onClick();
  }
  expect(onClick).toBeCalled();
});

test('Button is not clickable when disabled', () => {
  const onClick = jest.fn();
  const component = renderer.create(
    <AptoButton onClick={onClick} disabled>Click</AptoButton>
  );
  const tree = component.toJSON();
  if (tree) {
    tree.props.onClick();
  }
  expect(onClick).not.toBeCalled();
});
