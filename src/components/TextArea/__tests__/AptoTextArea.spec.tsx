import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoTextArea } from '../AptoTextArea';

afterEach(() => {
  cleanup();
});

describe('AptoTextArea', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoTextArea />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders with name/value', () => {
    const { container } = render(<AptoTextArea name="foo" value="bar" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders disabled', () => {
    const { container } = render(
      <AptoTextArea disabled={true} name="foo" value="bar" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
