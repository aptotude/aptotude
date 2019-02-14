import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoErrorPage } from '../AptoErrorPage';

afterEach(() => {
  cleanup();
});

describe('AptoErrorPage', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoErrorPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders 500', () => {
    const { container } = render(<AptoErrorPage type="500" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders 400', () => {
    const { container } = render(<AptoErrorPage type="400" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders 404', () => {
    const { container } = render(<AptoErrorPage type="404" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders 403', () => {
    const { container } = render(<AptoErrorPage type="403" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders message', () => {
    const { container } = render(<AptoErrorPage message="cat is fat" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders title', () => {
    const { container } = render(<AptoErrorPage title="hi title" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
