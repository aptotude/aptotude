import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoCard } from '../AptoCard';

describe('Card Header Component', () => {
  afterEach(cleanup);

  it('Renders', () => {
    const { container } = render(<AptoCard />);

    const node = container.querySelector('.AptoCard');
    expect(node!.className).toEqual('AptoCard');
  });

  it('Renders custom className', () => {
    const { container } = render(<AptoCard className="foo" />);

    const node = container.querySelector('.AptoCard');
    expect(node!.className).toEqual('AptoCard foo');
  });

  it('Renders children', () => {
    const { container } = render(
      <AptoCard>
        <div>foo</div>
      </AptoCard>
    );

    const node = container.querySelector('.AptoCard');
    expect(node!.innerHTML).toEqual('<div>foo</div>');
  });
});
