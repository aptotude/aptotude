import React from 'react';
import classNames from 'classnames';
import './aptoList.scss';
import { StandardTypes } from '../../utils/standardTypes';

interface Props extends StandardTypes {
  type?: 'ul' | 'ol' | undefined;
}

const COMPONENT_PREFIX = 'AptoList';

export class AptoList extends React.Component<Props> {
  public render() {
    const {
      type,
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      type ? `${COMPONENT_PREFIX}--${type}` : undefined,
      className
    );

    const Component: any = type || 'div';

    return (
      <Component
        {...rest}
        ref={forwardRef}
        className={classes}>
          {children}
      </Component>
    );
  }
}
