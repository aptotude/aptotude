import * as React from 'react';
import { AptoSnackbarItem } from '../SnackbarItem/AptoSnackbarItem';
import { AptoSnackbarContext } from './AptoSnackbarContext';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import { AptoButton } from '../Button';
import { AptoIcon } from '../Icon';
import { close } from '@apto/icons';

interface AnchorOrigin {
  horizontal: 'left' | 'center' | 'right';
  vertical: 'top' | 'bottom';
}

interface AptoSnackbarProps extends StandardTypes {
  anchorOrigin: AnchorOrigin;
  duration: number;
}

export class AptoSnackbar extends React.Component<AptoSnackbarProps> {
  public static defaultProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    duration: 5000
  };

  public render() {
    const {
      anchorOrigin: { vertical, horizontal },
      className,
      duration
    } = this.props;
    const anchorClasses = classNames(
      `AptoSnackbar`,
      `AptoSnackbarAnchorOrigin${vertical}${horizontal}`,
      className
    );
    return (
      <AptoSnackbarContext.Consumer>
        {({ snacks, hideSnack }) => (
          <React.Fragment>
            {(snacks.length && (
              <div className={anchorClasses}>
                <div>
                  {snacks.map(snack => (
                    <AptoSnackbarItem
                      key={snack.id}
                      open={true}
                      variant={snack.type}
                      onClose={() => hideSnack(snack, null)}
                      autoHideDuration={duration}
                      action={
                        snack.action || [
                          <AptoButton
                            title="close"
                            kind="link"
                            variant="secondaryDark"
                            key="close"
                            onClick={e => hideSnack(snack, e)}
                          >
                            <AptoIcon inline={true} icon={close} />
                          </AptoButton>
                        ]
                      }
                      message={snack.message}
                    />
                  ))}
                </div>
              </div>
            )) ||
              null}
          </React.Fragment>
        )}
      </AptoSnackbarContext.Consumer>
    );
  }
}
