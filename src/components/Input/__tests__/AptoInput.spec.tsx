import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoInput } from '../AptoInput';

afterEach(() => {
  cleanup();
});

describe('AptoInput', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoInput />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders with name/value', () => {
    const { container } = render(<AptoInput name="foo" value="bar" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders disabled', () => {
    const { container } = render(
      <AptoInput disabled={true} name="foo" value="bar" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
