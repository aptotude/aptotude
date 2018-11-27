import React from 'react';
import AptoContainer from '../AptoContainer';
import { render } from 'react-testing-library';

describe('Container Component', () => {
  it('Container renders', () => {
    const {
      container
    } = render(
      <AptoContainer />
    );
    const node = container.querySelector('.AptoContainer');
    expect(node!.className).toEqual('AptoContainer');
  });

  it('Fixed container renders', () => {
    const {
      container
    } = render(
      <AptoContainer fixed/>
    );
    const node = container.querySelector('.AptoContainer');
    expect(node!.className).toEqual('AptoContainer AptoContainer--fixed');
  });

  it('Scrollable container renders', () => {
    const {
      container
    } = render(
      <AptoContainer scroll/>
    );
    const node = container.querySelector('.AptoContainer');
    expect(node!.className).toEqual('AptoContainer AptoContainer--scroll');
  });

  it('Renders custom className', () => {
    const {
      container
    } = render(
      <AptoContainer className="bar"/>
    );
    const node = container.querySelector('.AptoContainer');
    expect(node!.className).toEqual('AptoContainer bar');
  });

  it('Renders children', () => {
    const {
      container
    } = render(
      <AptoContainer>
        <div>Foo</div>
      </AptoContainer>
    );
    const node = container.querySelector('.AptoContainer > div');
    expect(node!.innerHTML).toEqual('Foo');
  });
});
