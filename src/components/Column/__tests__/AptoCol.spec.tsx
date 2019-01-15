import React from 'react';
import { AptoCol } from '../AptoCol';
import { render, cleanup } from 'react-testing-library';

describe('Column Component', () => {
  afterEach(cleanup);

  it('Col renders', () => {
    const { container } = render(<AptoCol />);

    const node = container.querySelector('.AptoCol');
    expect(node!.className).toEqual('AptoCol');
  });

  it('xs numbered Col renders', () => {
    const { container } = render(<AptoCol xs="2" />);
    const node = container.querySelector('.AptoCol');
    expect(node!.className).toEqual('AptoCol AptoCol-2');
  });

  it('sm numbered Col renders', () => {
    const { container } = render(<AptoCol sm="2" />);
    const node = container.querySelector('.AptoCol');
    expect(node!.className).toEqual('AptoCol AptoCol-sm-2');
  });

  it('md numbered Col renders', () => {
    const { container } = render(<AptoCol md="2" />);
    const node = container.querySelector('.AptoCol');
    expect(node!.className).toEqual('AptoCol AptoCol-md-2');
  });

  it('lg numbered Col renders', () => {
    const { container } = render(<AptoCol lg="2" />);
    const node = container.querySelector('.AptoCol');
    expect(node!.className).toEqual('AptoCol AptoCol-lg-2');
  });

  it('xl numbered Col renders', () => {
    const { container } = render(<AptoCol xl="2" />);
    const node = container.querySelector('.AptoCol');
    expect(node!.className).toEqual('AptoCol AptoCol-xl-2');
  });

  it('sm auto Col renders', () => {
    const { container } = render(<AptoCol sm="auto" />);
    const node = container.querySelector('.AptoCol');
    expect(node!.className).toEqual('AptoCol AptoCol-sm-auto');
  });

  it('sm Col renders', () => {
    const { container } = render(<AptoCol sm="true" />);
    const node = container.querySelector('.AptoCol');
    expect(node!.className).toEqual('AptoCol AptoCol-sm');
  });

  it('mixed Col renders', () => {
    const { container } = render(
      <AptoCol xs="2" sm="3" md="4" lg="5" xl="6" />
    );
    const node = container.querySelector('.AptoCol');
    expect(node!.className).toEqual(
      'AptoCol AptoCol-2 AptoCol-sm-3 AptoCol-md-4 AptoCol-lg-5 AptoCol-xl-6'
    );
  });

  it('renders children', () => {
    const { container } = render(
      <AptoCol>
        <div>Foo</div>
      </AptoCol>
    );
    const node = container.querySelector('.AptoCol > div');
    expect(node!.innerHTML).toEqual('Foo');
  });
});
