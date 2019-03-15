import * as React from 'react';
import { AptoSnackbarItem } from '../SnackbarItem/AptoSnackbarItem';
import { AptoSnackbarContext } from './AptoSnackbarContext';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import { AptoButton } from '../Button';
import { AptoIcon } from '../Icon';
import { close } from '@apto/icons';

export type AptoSnackbarHorizontal = 'left' | 'center' | 'right';
export type AptoSnackbarVertical = 'top' | 'bottom';

export interface AptoSnackbarProps extends StandardTypes {
  anchorOrigin?: {
    horizontal: string | AptoSnackbarHorizontal;
    vertical: string | AptoSnackbarVertical;
  };
  duration?: number;
}

export class AptoSnackbar extends React.Component<AptoSnackbarProps> {
  public static defaultProps = {
    duration: 5000
  };

  public render() {
    const { className, duration } = this.props;
    const vertical =
      (this.props.anchorOrigin && this.props.anchorOrigin.vertical) || 'bottom';
    const horizontal =
      (this.props.anchorOrigin && this.props.anchorOrigin.horizontal) || 'left';
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
                            data-testid="close-snack"
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
