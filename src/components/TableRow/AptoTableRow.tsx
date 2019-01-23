import React from 'react';
import { StandardTypes } from '../../utils/standardTypes';
import classNames from 'classnames';
import './aptoTableRow.scss';

const COMPONENT_PREFIX = 'AptoTableRow';

export interface AptoTableRowDisplayProps extends StandardTypes {
  highlight?: 'danger' | 'primary' | 'warning' | 'success' | undefined;
}

export class AptoTableRow extends React.Component<
  AptoTableRowDisplayProps
> {
  public render() {
    const { highlight, children, ...rest } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      highlight && `${COMPONENT_PREFIX}--${highlight}`
    );

    return (
      <tr className={classes} {...rest}>
        {children}
      </tr>
    );
  }
}
