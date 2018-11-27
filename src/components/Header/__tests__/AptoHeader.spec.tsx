import React from 'react';
import AptoHeader from '../AptoHeader';
import { render } from 'react-testing-library';

describe('Header Component', () => {
  it('Header renders', () => {
    const {
      container
    } = render(
      <AptoHeader/>
    );
    const node = container.querySelector('h1.AptoHeader');
    expect(node!.className).toEqual('AptoHeader AptoHeader--h1');
  });

  it('Header 1 renders', () => {
    const {
      container
    } = render(
      <AptoHeader type="1"/>
    );
    const node = container.querySelector('h1.AptoHeader');
    expect(node!.className).toEqual('AptoHeader AptoHeader--h1');
  });

  it('Header 2 renders', () => {
    const {
      container
    } = render(
      <AptoHeader type="2"/>
    );
    const node = container.querySelector('h2.AptoHeader');
    expect(node!.className).toEqual('AptoHeader AptoHeader--h2');
  });

  it('Header 3 renders', () => {
    const {
      container
    } = render(
      <AptoHeader type="3"/>
    );
    const node = container.querySelector('h3.AptoHeader');
    expect(node!.className).toEqual('AptoHeader AptoHeader--h3');
  });

  it('Header 4 renders', () => {
    const {
      container
    } = render(
      <AptoHeader type="4"/>
    );
    const node = container.querySelector('h4.AptoHeader');
    expect(node!.className).toEqual('AptoHeader AptoHeader--h4');
  });

  it('Header 5 renders', () => {
    const {
      container
    } = render(
      <AptoHeader type="5"/>
    );
    const node = container.querySelector('h5.AptoHeader');
    expect(node!.className).toEqual('AptoHeader AptoHeader--h5');
  });

  it('Header 6 renders', () => {
    const {
      container
    } = render(
      <AptoHeader type="6"/>
    );
    const node = container.querySelector('h6.AptoHeader');
    expect(node!.className).toEqual('AptoHeader AptoHeader--h6');
  });

  it('Header with custom className renders', () => {
    const {
      container
    } = render(
      <AptoHeader className="foo" type="6"/>
    );
    const node = container.querySelector('h6.AptoHeader');
    expect(node!.className).toEqual('AptoHeader AptoHeader--h6 foo');
  });

  it('Header renders children', () => {
    const {
      container
    } = render(
      <AptoHeader>
        Hi
      </AptoHeader>
    );
    const node = container.querySelector('h1.AptoHeader');
    expect(node!.innerHTML).toEqual('Hi');
  });
});
