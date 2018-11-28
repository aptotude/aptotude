import React from 'react';
import classNames from 'classnames';
import './aptoCardFooter.scss';
import { StandardTypes } from '../../utils/standardTypes';

const COMPONENT_PREFIX = 'AptoCardFooter';

interface Props extends StandardTypes {
  padTop?: boolean;
}

export default class AptoCardFooter extends React.Component<Props> {
  public render() {
    const {
      padTop,
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      padTop && `${COMPONENT_PREFIX}--padTop`,
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
