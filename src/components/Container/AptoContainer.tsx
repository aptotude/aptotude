import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoContainer.scss';

const COMPONENT_PREFIX = 'AptoContainer';

export interface AptoContainerDisplayProps extends StandardTypes {
  scroll?: boolean;
  fixed?: boolean;
}

export class AptoContainer extends React.PureComponent<AptoContainerDisplayProps> {
  public static defaultProps = {
    scroll: false,
    fixed: false
  };

  public render() {
    const {
      children,
      className,
      scroll,
      fixed,
      forwardRef,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      scroll && `${COMPONENT_PREFIX}--scroll`,
      fixed && `${COMPONENT_PREFIX}--fixed`,
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
