import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoCardHeader } from '../AptoCardHeader';

describe('Card Header Component', () => {
  afterEach(cleanup);

  it('Renders', () => {
    const { container } = render(<AptoCardHeader />);

    const node = container.querySelector('.AptoCardHeader');
    expect(node!.className).toEqual('AptoCardHeader');
  });

  it('Renders padded bottom version', () => {
    const { container } = render(<AptoCardHeader padBottom />);

    const node = container.querySelector('.AptoCardHeader');
    expect(node!.className).toEqual('AptoCardHeader AptoCardHeader--padBottom');
  });

  it('Renders custom className', () => {
    const { container } = render(<AptoCardHeader className="foo" />);

    const node = container.querySelector('.AptoCardHeader');
    expect(node!.className).toEqual('AptoCardHeader foo');
  });

  it('Renders children', () => {
    const { container } = render(
      <AptoCardHeader>
        <div>foo</div>
      </AptoCardHeader>
    );

    const node = container.querySelector('.AptoCardHeader');
    expect(node!.innerHTML).toEqual('<div>foo</div>');
  });
});
