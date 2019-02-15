import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoSearch } from '../AptoSearch';

afterEach(() => {
  cleanup();
});

describe('AptoSearch', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoSearch />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Component with name/value', () => {
    const { container } = render(<AptoSearch name="hi" value="woo" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders loading', () => {
    const { container } = render(<AptoSearch loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders disabled', () => {
    const { container } = render(<AptoSearch disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders results', () => {
    const results = [{ title: 'foo', value: 'bar' }];

    const { container } = render(<AptoSearch results={results} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders result categories', () => {
    const results = {
      things: {
        name: 'things',
        results: [{ title: 'foo', value: 'bar' }]
      },
      stuff: {
        name: 'stuff',
        results: [{ title: 'boo', value: 'car' }]
      }
    };

    const { container } = render(<AptoSearch category results={results} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
