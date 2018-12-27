import React from 'react';
import classNames from 'classnames';
import './aptoShimmer.scss';
import { StandardTypes } from '../../utils/standardTypes';

const COMPONENT_PREFIX = 'AptoShimmer';

export class AptoShimmer extends React.PureComponent<StandardTypes> {
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
