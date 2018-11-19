import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoContainer.scss';

const COMPONENT_PREFIX = 'AptoContainer';

interface Props extends StandardTypes {
  scroll?: boolean;
  fixed?: boolean;
}

class AptoContainer extends React.Component<Props> {
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

    const Component = 'div';

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

export default AptoContainer;