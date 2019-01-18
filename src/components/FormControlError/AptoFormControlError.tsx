import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoFormControlError.scss';

const COMPONENT_PREFIX = 'AptoFormControlError';

export interface AptoFormControlErrorDisplayProps extends StandardTypes {
  error?: string | undefined | null;
}

export class AptoFormControlError extends React.Component<
  AptoFormControlErrorDisplayProps
> {
  public static defaultProps = {
    error: undefined
  };

  public render() {
    const { error, forwardRef, className, ...rest } = this.props;

    const classes = classNames(COMPONENT_PREFIX, className);

    if (!error) {
      return null;
    }

    return (
      <div {...rest} ref={forwardRef} className={classes}>
        {error}
      </div>
    );
  }
}
