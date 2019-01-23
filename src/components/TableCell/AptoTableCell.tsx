import React from 'react';
import { StandardTypes } from '../../utils/standardTypes';
import classNames from 'classnames';
import './aptoTableCell.scss';

const COMPONENT_PREFIX = 'AptoTableCell';

export interface AptoTableCellDisplayProps extends StandardTypes {
  type?: 'th' | 'td' | undefined;
  scope?: 'col' | 'row' | undefined;
  highlight?: 'danger' | 'primary' | 'warning' | 'success' | undefined;
}

export class AptoTableCell extends React.Component<AptoTableCellDisplayProps> {
  public render() {
    const { type, highlight, scope, children, ...rest } = this.props;

    const Component = type || 'td';
    const classes = classNames(
      COMPONENT_PREFIX,
      highlight && `${COMPONENT_PREFIX}--${highlight}`
    );

    return (
      <Component scope={scope || undefined} className={classes} {...rest}>
        {children}
      </Component>
    );
  }
}
