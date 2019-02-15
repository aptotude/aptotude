import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoSelect } from '../AptoSelect';

afterEach(() => {
  cleanup();
});

describe('AptoSelect', () => {
  const options = [
    { key: '0', value: '', text: 'Choose' },
    { key: '1', value: '1', text: 'Item 1' }
  ];

  it('Renders Component', () => {
    const { container } = render(<AptoSelect options={options} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Component with name/value', () => {
    const { container } = render(
      <AptoSelect options={options} name="hi" value="woo" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders disabled', () => {
    const { container } = render(
      <AptoSelect disabled={true} options={options} name="hi" value="woo" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
