import React from 'react';
import {
  render,
  cleanup,
  getByText,
  fireEvent,
  wait,
  getByTestId
} from 'react-testing-library';
import { AptoSnackbar, AptoSnackbarProps } from '../AptoSnackbar';
import {
  AptoSnackbarContext,
  AptoSnack,
  AptoSnackbarContextInterface
} from '../AptoSnackbarContext';
import { AptoAlertVariants } from '../../Alert';

let snackCounter = 0;

class TestComponent extends React.Component<
  AptoSnackbarProps,
  AptoSnackbarContextInterface
> {
  public showSnack = (
    message: React.ReactNode,
    type: AptoAlertVariants = 'info',
    action: React.ReactNode | null = null
  ) => {
    const snack: AptoSnack = {
      message,
      action,
      type,
      id: snackCounter += 1
    };
    const oldSnacks: AptoSnack[] = this.state.snacks || [];
    this.setState({ snacks: oldSnacks.concat(snack) });
  };

  public hideSnack = (removedSnack: AptoSnack) => {
    const oldSnacks: AptoSnack[] = this.state.snacks || [];
    const newSnacks = oldSnacks.filter(snack => snack.id !== removedSnack.id);
    this.setState({ snacks: newSnacks });
  };

  public state = {
    snacks: [],
    hideSnack: this.hideSnack,
    showSnack: this.showSnack
  };

  public render() {
    const { anchorOrigin } = this.props;
    let snackProps: AptoSnackbarProps = {};

    if (anchorOrigin) {
      snackProps = {
        anchorOrigin
      };
    }

    return (
      <AptoSnackbarContext.Provider value={this.state}>
        <AptoSnackbar {...snackProps} />
        <AptoSnackbarContext.Consumer>
          {snackContext => (
            <div>
              <button
                onClick={() => {
                  snackContext.showSnack(`This is a snack`);
                }}
              >
                Open Snack
              </button>
              <button
                onClick={() => {
                  snackContext.showSnack(`This is another snack`, 'danger');
                }}
              >
                Open Another Snack
              </button>
            </div>
          )}
        </AptoSnackbarContext.Consumer>
      </AptoSnackbarContext.Provider>
    );
  }
}

describe('Snackbar Component', () => {
  afterEach(cleanup);

  it('It renders', () => {
    const { container } = render(<TestComponent />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('It adds a snack', async () => {
    const { container } = render(<TestComponent />);

    const btn = getByText(container, 'Open Snack');

    fireEvent.click(btn);

    await wait(() => {
      expect(container.querySelector('.AptoSnackbar')).toMatchSnapshot();
    });
  });

  it('It adds multiple snacks', async () => {
    const { container } = render(<TestComponent />);

    const btn = getByText(container, 'Open Snack');
    const btn2 = getByText(container, 'Open Another Snack');

    fireEvent.click(btn);
    fireEvent.click(btn2);

    await wait(() => {
      expect(container.querySelector('.AptoSnackbar')).toMatchSnapshot();
    });
  });

  it('It Closes a snack when clicking close', async () => {
    const { container } = render(<TestComponent />);

    const btn = getByText(container, 'Open Snack');

    fireEvent.click(btn);

    await wait(() => {
      const close = getByTestId(container, 'close-snack');
      fireEvent.click(close);
      expect(container.querySelector('.AptoSnackbar')).toMatchSnapshot();
    });
  });

  it('It lets you set anchor location', async () => {
    const props = {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    };

    const { container } = render(<TestComponent {...props} />);

    const btn = getByText(container, 'Open Snack');

    fireEvent.click(btn);

    await wait(() => {
      expect(container.querySelector('.AptoSnackbar')).toMatchSnapshot();
    });
  });
});
