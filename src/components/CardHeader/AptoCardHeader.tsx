import React from 'react';
import classNames from 'classnames';
import './aptoCardHeader.scss';
import { StandardTypes } from '../../utils/standardTypes';

const COMPONENT_PREFIX = 'AptoCardHeader';

interface Props extends StandardTypes {
  padBottom?: boolean;
}

export default class AptoCardHeader extends React.Component<Props> {
  public render() {
    const {
      padBottom,
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      padBottom && `${COMPONENT_PREFIX}--padBottom`,
      className
    );

    return (
      <div
        {...rest}
        ref={forwardRef}
        className={classes}>
          {children}
      </div>
    );
  }
}