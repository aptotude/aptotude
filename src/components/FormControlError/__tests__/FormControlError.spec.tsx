import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoFormControlError } from '../AptoFormControlError';

afterEach(() => {
  cleanup();
});

describe('AptoFormControlError', () => {
  it('Renders null with no data', () => {
    const { container } = render(<AptoFormControlError />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Component with message', () => {
    const { container } = render(<AptoFormControlError error="no bueno" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Component with extra class', () => {
    const { container } = render(
      <AptoFormControlError className="foo" error="no bueno" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
