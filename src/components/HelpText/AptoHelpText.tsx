import React from 'react';
import classNames from 'classnames';
import './aptoHelpText.scss';
import { StandardTypes } from '../../utils/standardTypes';

export interface AptoHelpTextDisplayProps extends StandardTypes {
  error?: boolean;
  inline?: boolean;
}

const COMPONENT_PREFIX = 'AptoHelpText';

export class AptoHelpText extends React.Component<AptoHelpTextDisplayProps> {
  public static defaultProps = {
    error: false,
    inline: false
  };

  public render() {
    const {
      error,
      inline,
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      error && `${COMPONENT_PREFIX}--error`,
      inline && `${COMPONENT_PREFIX}--inline`,
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
