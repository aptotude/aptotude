import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoShimmer.scss';

const COMPONENT_PREFIX = 'AptoShimmer';

class AptoShimmer extends React.Component<StandardTypes> {
  public render() {
    const {
      forwardRef,
      className,
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
  AptoShimmer
};
