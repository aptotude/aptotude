import React from 'react';
import { AptoRow } from '../AptoRow';
import { render } from 'react-testing-library';

describe('Row Component', () => {
  it('renders', () => {
    const { container } = render(<AptoRow />);
    const node = container.querySelector('.AptoRow');
    expect(node!.className).toEqual('AptoRow');
  });

  it('Row without gutter renders', () => {
    const { container } = render(<AptoRow noGutter />);
    const node = container.querySelector('.AptoRow');
    expect(node!.className).toEqual('AptoRow AptoRow--noGutter');
  });

  it('Row adds custom className', () => {
    const { container } = render(<AptoRow className="foo" />);
    const node = container.querySelector('.AptoRow');
    expect(node!.className).toEqual('AptoRow foo');
  });

  it('Renders children', () => {
    const { container } = render(
      <AptoRow>
        <div>Foo</div>
      </AptoRow>
    );
    const node = container.querySelector('.AptoRow > div');
    expect(node!.innerHTML).toEqual('Foo');
  });
});
