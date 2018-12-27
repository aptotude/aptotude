import React from 'react';
import classNames from 'classnames';
import './aptoCardContent.scss';
import { StandardTypes } from '../../utils/standardTypes';

const COMPONENT_PREFIX = 'AptoCardContent';

export interface AptoCardContentDisplayProps extends StandardTypes {
  noPadding?: boolean;
}

export class AptoCardContent extends React.Component<AptoCardContentDisplayProps> {
  public render() {
    const {
      noPadding,
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      noPadding && `${COMPONENT_PREFIX}--noPadding`,
      className
    );

    return (
      <div
        {...rest}
        ref={forwardRef}
        className={classes}>
          {children}
      </div>
    );
  }
}
