import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoAlert } from '../AptoAlert';

afterEach(() => {
  cleanup();
});

describe('AptoAlert', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoAlert>scary</AptoAlert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders info', () => {
    const { container } = render(<AptoAlert variant="info">scary</AptoAlert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders success', () => {
    const { container } = render(
      <AptoAlert variant="success">scary</AptoAlert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders warning', () => {
    const { container } = render(
      <AptoAlert variant="warning">scary</AptoAlert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders danger', () => {
    const { container } = render(<AptoAlert variant="danger">scary</AptoAlert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders extra classes', () => {
    const { container } = render(<AptoAlert className="foo">scary</AptoAlert>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
