import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoList } from '../AptoList';

describe('List Component', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { container } = render(
      <AptoList>
        <div>a</div>
      </AptoList>
    );

    const node = container.querySelector('div.AptoList');
    expect(node!.className).toEqual('AptoList');
    expect(node!.innerHTML).toEqual('<div>a</div>');
  });

  it('renders custom className', () => {
    const { container } = render(
      <AptoList className="foo">
        <div>a</div>
      </AptoList>
    );

    const node = container.querySelector('div.AptoList');
    expect(node!.className).toEqual('AptoList foo');
  });

  it('renders ul', () => {
    const { container } = render(
      <AptoList type="ul">
        <li>a</li>
      </AptoList>
    );

    const node = container.querySelector('ul.AptoList');
    expect(node!.className).toEqual('AptoList AptoList--ul');
  });

  it('renders ol', () => {
    const { container } = render(
      <AptoList type="ol">
        <li>a</li>
      </AptoList>
    );

    const node = container.querySelector('ol.AptoList');
    expect(node!.className).toEqual('AptoList AptoList--ol');
  });
});
