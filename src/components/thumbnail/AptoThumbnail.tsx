import React from 'react';
import classNames from 'classnames';
import './aptoThumbnail.scss';
import { StandardTypes } from '../../utils/standardTypes';

const COMPONENT_PREFIX = 'AptoThumbnail';

class AptoThumbnail extends React.Component<StandardTypes> {
  public render() {
    const {
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    const Component = 'p';

    const classes = classNames(
      COMPONENT_PREFIX,
      className
    );

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


export default AptoThumbnail;
