import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoRow.scss';

const COMPONENT_PREFIX = 'AptoRow';

interface Props extends StandardTypes {
  noGutter?: boolean;
}

class AptoRow extends React.Component<Props> {
  public static defaultProps = {
    noGutter: false
  };

  public render() {
    const {
      children,
      className,
      noGutter,
      forwardRef,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      noGutter && `${COMPONENT_PREFIX}--noGutter`,
      className
    );

    const Component = 'div';

    return (
      <Component
        {...rest}
        ref={forwardRef}
        className={classes}>
        {children}
      </Component>
    );
  }
}

export default AptoRow;