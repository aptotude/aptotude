import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoCardContent } from '../AptoCardContent';

describe('Card Content Component', () => {
  afterEach(cleanup);

  it('Renders', () => {
    const { container } = render(<AptoCardContent />);

    const node = container.querySelector('.AptoCardContent');
    expect(node!.className).toEqual('AptoCardContent');
  });

  it('Renders no padding version', () => {
    const { container } = render(<AptoCardContent noPadding />);

    const node = container.querySelector('.AptoCardContent');
    expect(node!.className).toEqual(
      'AptoCardContent AptoCardContent--noPadding'
    );
  });

  it('Renders custom className', () => {
    const { container } = render(<AptoCardContent className="foo" />);

    const node = container.querySelector('.AptoCardContent');
    expect(node!.className).toEqual('AptoCardContent foo');
  });

  it('Renders children', () => {
    const { container } = render(
      <AptoCardContent>
        <div>foo</div>
      </AptoCardContent>
    );

    const node = container.querySelector('.AptoCardContent');
    expect(node!.innerHTML).toEqual('<div>foo</div>');
  });
});
