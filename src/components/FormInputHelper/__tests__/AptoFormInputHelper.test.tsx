import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoFormInputHelper } from '../AptoFormInputHelper';

afterEach(cleanup);

describe('AptoFormInputHelper', () => {
  it('should render ', () => {
    const props = {
      required: true,
      label: 'Label',
      name: 'field',
      value: 16,
      error: undefined,
      change: () => {
        // wee
      },
      length: 24
    };
    const { container } = render(<AptoFormInputHelper {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render error state', () => {
    const props = {
      label: 'Label',
      name: 'field',
      value: 16,
      error: 'Broken Stuff',
      change: () => {
        // wee
      }
    };
    const { container } = render(<AptoFormInputHelper {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
