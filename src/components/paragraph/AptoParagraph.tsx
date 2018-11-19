import React from 'react';
import classNames from 'classnames';
import './aptoParagraph.scss';
import { StandardTypes } from '../../utils/standardTypes';

interface Props extends StandardTypes {
  compact?: boolean;
}

const COMPONENT_PREFIX = 'AptoParagraph';

class AptoParagraph extends React.Component<Props> {
  public static defaultProps = {
    compact: false
  };

  public render() {
    const {
      compact,
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    const Component = 'p';

    const classes = classNames(
      COMPONENT_PREFIX,
      compact && `${COMPONENT_PREFIX}--compact`,
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

export default AptoParagraph;
