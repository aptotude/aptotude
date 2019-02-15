import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoRadio } from '../AptoRadio';

afterEach(() => {
  cleanup();
});

describe('AptoRadio', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoRadio />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders with name/value', () => {
    const { container } = render(<AptoRadio name="foo" value="bar" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders checked', () => {
    const { container } = render(
      <AptoRadio checked={true} name="foo" value="bar" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders disabled', () => {
    const { container } = render(
      <AptoRadio disabled={true} name="foo" value="bar" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
