import React from 'react';
import { AptoNavbar } from '../AptoNavbar';
import { render } from 'react-testing-library';

describe('Navbar Component', () => {
  it('Navbar renders', () => {
    const { container } = render(<AptoNavbar />);

    const node = container.querySelector('.AptoNavbar');
    expect(node!.className).toEqual('AptoNavbar');
  });

  it('Navbar renders additional class names', () => {
    const { container } = render(<AptoNavbar className="foo" />);

    const node = container.querySelector('.AptoNavbar');
    expect(node!.className).toEqual('AptoNavbar foo');
  });

  it('Navbar renders children', () => {
    const { container } = render(<AptoNavbar>Foo</AptoNavbar>);

    const node = container.querySelector('.AptoNavbar-content');
    expect(node!.innerHTML).toEqual('Foo');
  });

  it('Navbar fixed renders', () => {
    const { container } = render(<AptoNavbar fixed />);

    const node = container.querySelector('.AptoNavbar');
    expect(node!.className).toEqual('AptoNavbar AptoNavbar--fixed');
  });
});
