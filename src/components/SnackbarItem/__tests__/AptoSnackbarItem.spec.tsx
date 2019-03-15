import React from 'react';
import { render, cleanup, wait, fireEvent } from 'react-testing-library';
import { AptoSnackbarItem } from '../AptoSnackbarItem';

describe('SnackbarItem Component', () => {
  afterEach(cleanup);

  it('It renders with message', () => {
    const props = {
      open: true,
      message: 'Hey'
    };
    const { container } = render(<AptoSnackbarItem {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('It renders null if closed', () => {
    const props = {
      open: false,
      message: 'Hey'
    };
    const { container } = render(<AptoSnackbarItem {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('It renders actions', () => {
    const props = {
      open: true,
      message: 'Hey',
      action: [<button key="foo">Foo</button>]
    };
    const { container } = render(<AptoSnackbarItem {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('It renders variant', () => {
    const props = {
      open: true,
      message: 'Hey',
      action: [<button key="foo">Foo</button>]
    };
    const { container } = render(
      <AptoSnackbarItem variant="danger" {...props} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('It eventually hides', async () => {
    const props = {
      open: true,
      onClose: jest.fn(),
      message: 'Hey',
      autoHideDuration: 0
    };
    const { container } = render(<AptoSnackbarItem {...props} />);
    await wait(() => {
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('It eventually calls onClose', async () => {
    const closer = jest.fn();
    const props = {
      open: true,
      onClose: closer,
      message: 'Hey',
      autoHideDuration: 0
    };
    render(<AptoSnackbarItem {...props} />);
    await wait(() => {
      expect(closer).toHaveBeenCalled();
    });
  });

  it('It does not hide if no onClose set', async () => {
    const props = {
      open: true,
      message: 'Hey',
      autoHideDuration: 0
    };
    const { container } = render(<AptoSnackbarItem {...props} />);
    await wait(() => expect(container.firstChild).toMatchSnapshot());
  });

  it('It does not call onClose if hovered over', async () => {
    const closer = jest.fn();
    const props = {
      open: true,
      onClose: closer,
      message: 'Hey',
      autoHideDuration: 50
    };
    const { container } = render(<AptoSnackbarItem {...props} />);

    fireEvent.mouseEnter(container);

    await wait(() => {
      expect(closer).not.toHaveBeenCalled();
    });
  });

  it('It eventually calls onClose when moused out', async () => {
    const closer = jest.fn();
    const props = {
      open: true,
      onClose: closer,
      message: 'Hey',
      autoHideDuration: 50
    };
    const { container } = render(<AptoSnackbarItem {...props} />);

    fireEvent.mouseEnter(container);
    fireEvent.mouseLeave(container);

    await wait(() => {
      expect(closer).toHaveBeenCalled();
    });
  });
});
