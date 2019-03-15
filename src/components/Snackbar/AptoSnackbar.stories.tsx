import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AptoSnack,
  AptoSnackbarContext,
  AptoSnackbarContextInterface
} from './AptoSnackbarContext';
import { AptoSnackbar } from './AptoSnackbar';
import { AptoButton } from '../Button';
import { AptoAlertVariants } from '../Alert';

let snackCounter = 0;

class SnackbarExample extends React.Component<
  {},
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
    return (
      <AptoSnackbarContext.Provider value={this.state}>
        <AptoSnackbar />
        <AptoSnackbarContext.Consumer>
          {snackContext => (
            <div>
              <AptoButton
                onClick={() => {
                  snackContext.showSnack(`This is a default that just happend`);
                }}
              >
                Open Default Snack
              </AptoButton>
              <br />
              <br />
              <AptoButton
                onClick={() => {
                  snackContext.showSnack(
                    `This is a success thing that just happend`,
                    'success'
                  );
                }}
              >
                Open success Snack
              </AptoButton>
              <br />
              <br />
              <AptoButton
                onClick={() => {
                  snackContext.showSnack(
                    `This is a warning thing that just happend`,
                    'warning'
                  );
                }}
              >
                Open warning Snack
              </AptoButton>
              <br />
              <br />
              <AptoButton
                onClick={() => {
                  snackContext.showSnack(
                    `This is a danger thing that just happend`,
                    'danger'
                  );
                }}
              >
                Open danger Snack
              </AptoButton>
            </div>
          )}
        </AptoSnackbarContext.Consumer>
      </AptoSnackbarContext.Provider>
    );
  }
}

storiesOf('Snackbar', module).add('Default', () => <SnackbarExample />);
