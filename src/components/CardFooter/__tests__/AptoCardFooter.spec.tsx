import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoCardFooter } from '../AptoCardFooter';

describe('Card Footer Component', () => {
  afterEach(cleanup);

  it('Renders', () => {
    const { container } = render(<AptoCardFooter />);

    const node = container.querySelector('.AptoCardFooter');
    expect(node!.className).toEqual('AptoCardFooter');
  });

  it('Renders padded top version', () => {
    const { container } = render(<AptoCardFooter padTop />);

    const node = container.querySelector('.AptoCardFooter');
    expect(node!.className).toEqual('AptoCardFooter AptoCardFooter--padTop');
  });

  it('Renders right align version', () => {
    const { container } = render(<AptoCardFooter align="right" />);

    const node = container.querySelector('.AptoCardFooter');
    expect(node!.className).toEqual('AptoCardFooter AptoCardFooter--right');
  });

  it('Renders center align version', () => {
    const { container } = render(<AptoCardFooter align="center" />);

    const node = container.querySelector('.AptoCardFooter');
    expect(node!.className).toEqual('AptoCardFooter AptoCardFooter--center');
  });

  it('Renders left align version', () => {
    const { container } = render(<AptoCardFooter align="left" />);

    const node = container.querySelector('.AptoCardFooter');
    expect(node!.className).toEqual('AptoCardFooter AptoCardFooter--left');
  });

  it('Renders Compound components', () => {
    const { container } = render(
      <AptoCardFooter>
        <AptoCardFooter.Left>Left</AptoCardFooter.Left>
        <AptoCardFooter.Right>Right</AptoCardFooter.Right>
      </AptoCardFooter>
    );

    const node = container.querySelector('.AptoCardFooter');
    const left = container.querySelector('.AptoCardFooter-Left');
    const right = container.querySelector('.AptoCardFooter-Right');
    expect(node!.className).toEqual('AptoCardFooter');
    expect(left!.innerHTML).toEqual('Left');
    expect(right!.innerHTML).toEqual('Right');
  });

  it('Renders custom className', () => {
    const { container } = render(<AptoCardFooter className="foo" />);

    const node = container.querySelector('.AptoCardFooter');
    expect(node!.className).toEqual('AptoCardFooter foo');
  });

  it('Renders children', () => {
    const { container } = render(
      <AptoCardFooter>
        <div>foo</div>
      </AptoCardFooter>
    );

    const node = container.querySelector('.AptoCardFooter');
    expect(node!.innerHTML).toEqual('<div>foo</div>');
  });
});
