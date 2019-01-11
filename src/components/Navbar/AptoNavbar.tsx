import React from 'react';
import classNames from 'classnames';
import './aptoNavbar.scss';
import { StandardTypes } from '../../utils/standardTypes';

export interface AptoNavbarDisplayProps extends StandardTypes {
  fixed?: boolean | undefined;
}

const COMPONENT_PREFIX = 'AptoNavbar';

export class AptoNavbar extends React.PureComponent<AptoNavbarDisplayProps> {
  public render() {
    const { fixed, className, forwardRef, children, ...rest } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      fixed && `${COMPONENT_PREFIX}--fixed`,
      className
    );

    return (
      <div {...rest} ref={forwardRef} className={classes}>
        <div className="AptoNavbar-content">{children}</div>
      </div>
    );
  }
}
