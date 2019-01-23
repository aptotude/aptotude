import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoAlert.scss';

const COMPONENT_PREFIX = 'AptoAlert';

export interface AptoAlertDisplayProps extends StandardTypes {
  variant?: 'info' | 'success' | 'warning' | 'danger';
}

export class AptoAlert extends React.Component<AptoAlertDisplayProps> {
  public static defaultProps = {
    variant: 'info'
  };

  public render() {
    const { variant, className, forwardRef, children, ...rest } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      variant && `${COMPONENT_PREFIX}--${variant}`,
      className
    );

    return (
      <div {...rest} ref={forwardRef} className={classes}>
        {children}
      </div>
    );
  }
}
