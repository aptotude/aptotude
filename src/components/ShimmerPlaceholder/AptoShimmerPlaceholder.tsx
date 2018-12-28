import React from 'react';
import classNames from 'classnames';
import './aptoShimmerPlaceholder.scss';
import { StandardTypes } from '../../utils/standardTypes';

const COMPONENT_PREFIX = 'AptoShimmer';

class AptoShimmerPlaceholder extends React.PureComponent<StandardTypes> {
  public render() {
    const {
      className,
      forwardRef,
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
        className={classes} />
    );
  }
}

export {
  AptoShimmerPlaceholder
}
