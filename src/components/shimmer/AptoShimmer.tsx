import React from 'react';
import classNames from 'classnames';
import './aptoShimmer.scss';
import { StandardTypes } from '../../utils/standardTypes';

const COMPONENT_PREFIX = 'AptoShimmer';

class AptoShimmer extends React.Component<StandardTypes> {
  public render() {
    const {
      className,
      forwardRef,
      ...rest
    } = this.props;

    const Component = 'div';

    const classes = classNames(
      COMPONENT_PREFIX,
      className
    );

    return (
      <Component
        {...rest}
        ref={forwardRef}
        className={classes} />
    );
  }
}

export default AptoShimmer;
