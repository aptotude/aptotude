import React from 'react';
import classNames from 'classnames';
import './aptoThumbnail.scss';
import { StandardTypes } from '../../utils/standardTypes';

const COMPONENT_PREFIX = 'AptoThumbnail';

export class AptoThumbnail extends React.PureComponent<StandardTypes> {
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
