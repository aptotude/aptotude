import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoThumbnail.scss';

const COMPONENT_PREFIX = 'AptoThumbnail';

export class AptoThumbnail extends React.Component<StandardTypes> {
  public render() {
    const {
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
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
