import React from 'react';
import { StandardTypes } from '../../utils/standardTypes';
import classNames from 'classnames';

const COMPONENT_PREFIX = 'AptoTableHead';

export class AptoTableHead extends React.PureComponent<StandardTypes> {
  public render() {
    const {
      children,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX
    );

    return (
      <thead className={classes} {...rest}>
        {children}
      </thead>
    );
  }
}
