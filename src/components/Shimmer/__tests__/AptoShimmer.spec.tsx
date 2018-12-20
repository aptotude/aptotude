import React from 'react';
import { AptoShimmer } from '../AptoShimmer';
import { render } from 'react-testing-library';

describe('Shimmer Component', () => {
  it('Shimmer renders', () => {
    const {
      container
    } = render(
      <AptoShimmer/>
    );

    const node = container.querySelector('.AptoShimmer');
    expect(node!.className).toEqual('AptoShimmer');
  });

  it('Custom className renders', () => {
    const {
      container
    } = render(
      <AptoShimmer className="foo"/>
    );

    const node = container.querySelector('.AptoShimmer');
    expect(node!.className).toEqual('AptoShimmer foo');
  });
});
