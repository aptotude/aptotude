import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoCard } from '../AptoCard';

describe('Card Header Component', () => {
  afterEach(cleanup);

  it('Renders', () => {
    const { container } = render(<AptoCard />);

    const node = container.querySelector('.AptoCard');
    expect(node!.className).toEqual('AptoCard AptoCard--elevation1');
  });

  it('Renders transparent', () => {
    const { container } = render(<AptoCard transparent={true} />);

    const node = container.querySelector('.AptoCard');
    expect(node!.className).toEqual(
      'AptoCard AptoCard--elevation1 AptoCard--transparent'
    );
  });

  it('Renders elevation 0', () => {
    const { container } = render(<AptoCard elevation="0" />);

    const node = container.querySelector('.AptoCard');
    expect(node!.className).toEqual('AptoCard AptoCard--elevation0');
  });

  it('Renders custom className', () => {
    const { container } = render(<AptoCard className="foo" />);

    const node = container.querySelector('.AptoCard');
    expect(node!.className).toEqual('AptoCard AptoCard--elevation1 foo');
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
