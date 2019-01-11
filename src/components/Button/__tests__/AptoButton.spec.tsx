import React from 'react';
import { AptoButton } from '../AptoButton';
import { render, fireEvent } from 'react-testing-library';

describe('Button Component', () => {
  it('Button renders', () => {
    const { container } = render(<AptoButton />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary'
    );
  });

  it('Button children render', () => {
    const { container } = render(<AptoButton>Foo</AptoButton>);
    const node = container.querySelector('button.AptoButton');
    expect(node!.innerHTML).toEqual('Foo');
  });

  it('Primary Button renders', () => {
    const { container } = render(<AptoButton variant="primary" />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary'
    );
  });

  it('Secondary Button renders', () => {
    const { container } = render(<AptoButton variant="secondary" />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--secondary'
    );
  });

  it('SecondaryDark Button renders', () => {
    const { container } = render(<AptoButton variant="secondaryDark" />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--secondaryDark'
    );
  });

  it('Danger Button renders', () => {
    const { container } = render(<AptoButton variant="danger" />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--danger'
    );
  });

  it('Link button renders', () => {
    const { container } = render(<AptoButton kind="link" />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--link AptoButton--primary'
    );
  });

  it('Button button renders', () => {
    const { container } = render(<AptoButton kind="button" />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary'
    );
  });

  it('Secondary Link button renders', () => {
    const { container } = render(
      <AptoButton kind="link" variant="secondary" />
    );
    const node = container.querySelector('button.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--link AptoButton--secondary'
    );
  });

  it('Disabled button renders', () => {
    const { container } = render(<AptoButton disabled />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.hasAttribute('disabled')).toBeTruthy();
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary AptoButton--disabled'
    );
  });

  it('Active button renders', () => {
    const { container } = render(<AptoButton active />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary AptoButton--active'
    );
  });

  it('Anchor renders with role attribute', () => {
    const { container } = render(<AptoButton href="#" />);
    const node = container.querySelector('a.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary'
    );
    expect(node!.hasAttribute('role')).toBeTruthy();
    expect(node!.getAttribute('href')).toEqual('#');
  });

  it('Anchor renders without role', () => {
    const { container } = render(<AptoButton href="http://www.google.com" />);
    const node = container.querySelector('a.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary'
    );
    expect(node!.hasAttribute('role')).toBeFalsy();
    expect(node!.getAttribute('href')).toEqual('http://www.google.com');
  });

  it('Anchor target renders', () => {
    const { container } = render(
      <AptoButton href="http://www.google.com" target="_blank" />
    );
    const node = container.querySelector('a.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary'
    );
    expect(node!.getAttribute('href')).toEqual('http://www.google.com');
    expect(node!.getAttribute('target')).toEqual('_blank');
  });

  it('Disabled anchor renders', () => {
    const { container } = render(<AptoButton href="#" disabled />);
    const node = container.querySelector('a.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary AptoButton--disabled'
    );
  });

  it('Active anchor renders', () => {
    const { container } = render(<AptoButton active href="#" />);
    const node = container.querySelector('a.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary AptoButton--active'
    );
  });

  it('Custom className is passed in', () => {
    const { container } = render(<AptoButton className="foo" />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.className).toEqual(
      'AptoButton AptoButton--button AptoButton--primary foo'
    );
  });

  it('Aria Label attribute renders', () => {
    const { container } = render(<AptoButton title="some title" />);
    const node = container.querySelector('button.AptoButton');
    expect(node!.getAttribute('aria-label')).toEqual('some title');
  });

  it('Button is clickable', () => {
    const onClick = jest.fn();
    const { container } = render(
      <AptoButton onClick={onClick}>Click</AptoButton>
    );
    const node = container.querySelector('button.AptoButton');
    if (node) {
      fireEvent.click(node);
    }
    expect(onClick).toBeCalled();
  });

  it('Button is not clickable when disabled', () => {
    const onClick = jest.fn();
    const { container } = render(
      <AptoButton onClick={onClick} disabled>
        Click
      </AptoButton>
    );
    const node = container.querySelector('button.AptoButton');
    if (node) {
      fireEvent.click(node);
    }
    expect(onClick).not.toBeCalled();
  });
});
