import * as React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  getByText,
  wait
} from 'react-testing-library';
import { AptoPager } from '../AptoPager';

afterEach(() => {
  cleanup();
});

describe('AptoPager', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoPager current={2} total={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Component with classnames', () => {
    const { container } = render(
      <AptoPager className="fooo" current={2} total={10} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Click event for pages', async () => {
    let clicked = 0;
    const { container } = render(
      <AptoPager
        onPageClick={pageNum => {
          clicked = pageNum;
        }}
        current={2}
        total={10}
      />
    );
    fireEvent.click(getByText(container, '3'));
    await wait(() => {
      expect(clicked).toEqual(3);
    });
  });

  it('Click event for prev', async () => {
    let clicked = 0;
    const { container } = render(
      <AptoPager
        onPageClick={pageNum => {
          clicked = pageNum;
        }}
        current={2}
        total={10}
      />
    );
    fireEvent.click(getByText(container, '< Previous'));
    await wait(() => {
      expect(clicked).toEqual(1);
    });
  });

  it('Click event for next', async () => {
    let clicked = 0;
    const { container } = render(
      <AptoPager
        onPageClick={pageNum => {
          clicked = pageNum;
        }}
        current={2}
        total={10}
      />
    );
    fireEvent.click(getByText(container, 'Next >'));
    await wait(() => {
      expect(clicked).toEqual(3);
    });
  });

  it('Click event does not fire on current page', async () => {
    let clicked = 0;
    const { container } = render(
      <AptoPager
        onPageClick={pageNum => {
          clicked = pageNum;
        }}
        current={2}
        total={10}
      />
    );
    fireEvent.click(getByText(container, '2'));
    await wait(() => {
      expect(clicked).toEqual(0);
    });
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
