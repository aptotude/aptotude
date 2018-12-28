import React from 'react';
import { StandardTypes } from '../../utils/standardTypes';
import classNames from 'classnames';

const COMPONENT_PREFIX = 'AptoTableBody';

export class AptoTableBody extends React.PureComponent<StandardTypes> {
  public render() {
    const {
      children,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX
    );

    return (
      <tbody className={classes} {...rest}>
        {children}
      </tbody>
    );
  }
}
