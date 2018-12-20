import React from 'react';
import { AptoSpinner } from '../AptoSpinner';
import { render } from 'react-testing-library';

describe('Spinner Component', () => {
  it('Spinner renders', () => {
    const {
      container
    } = render(
      <AptoSpinner/>
    );

    const node = container.querySelector('.AptoSpinner');
    const textNode = container.querySelector('.AptoSpinner .AptoSpinner-content');
    expect(node!.className).toEqual('AptoSpinner');
    expect(textNode).toEqual(null);
  });

  it('Spinner with no overlay renders', () => {
    const {
      container
    } = render(
      <AptoSpinner noOverlay/>
    );

    const node = container.querySelector('.AptoSpinner');
    expect(node!.className).toEqual('AptoSpinner AptoSpinner--noOverlay');
  });

  it('Spinner with text renders', () => {
    const {
      container
    } = render(
      <AptoSpinner text="foo"/>
    );

    const node = container.querySelector('.AptoSpinner .AptoSpinner-content');
    expect(node!.innerHTML).toEqual('foo');
  });

  it('Custom className renders', () => {
    const {
      container
    } = render(
      <AptoSpinner className="foo"/>
    );

    const node = container.querySelector('.AptoSpinner');
    expect(node!.className).toEqual('AptoSpinner foo');
  });
});
