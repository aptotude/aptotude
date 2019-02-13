import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoPager } from '../AptoPager';

afterEach(() => {
  cleanup();
});

describe('AptoPager', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoPager current={2} total={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders no prev', () => {
    const { container } = render(<AptoPager current={1} total={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders no next', () => {
    const { container } = render(<AptoPager current={10} total={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Component with more links', () => {
    const { container } = render(
      <AptoPager linkCount={10} current={2} total={100} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders next/prev', () => {
    const { container } = render(
      <AptoPager pages={false} current={2} total={10} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders pages', () => {
    const { container } = render(
      <AptoPager nextPrev={false} current={2} total={10} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
