import React from 'react';
import classNames from 'classnames';
import './aptoCardFooter.scss';
import { StandardTypes } from '../../utils/standardTypes';

const COMPONENT_PREFIX = 'AptoCardFooter';

interface Props extends StandardTypes {
  padTop?: boolean;
  align?: 'left' | 'right' | 'center' | undefined
}

export default class AptoCardFooter extends React.Component<Props> {
  public render() {
    const {
      padTop,
      align,
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      padTop && `${COMPONENT_PREFIX}--padTop`,
      align && `${COMPONENT_PREFIX}--${align}`,
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
