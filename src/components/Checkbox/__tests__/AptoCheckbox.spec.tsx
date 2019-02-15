import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoCheckbox } from '../AptoCheckbox';

afterEach(() => {
  cleanup();
});

describe('AptoCheckbox', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoCheckbox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders with name/value', () => {
    const { container } = render(<AptoCheckbox name="foo" value="bar" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders checked', () => {
    const { container } = render(
      <AptoCheckbox checked={true} name="foo" value="bar" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders disabled', () => {
    const { container } = render(
      <AptoCheckbox disabled={true} name="foo" value="bar" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
