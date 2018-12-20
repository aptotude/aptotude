import React from 'react';
import classNames from 'classnames';
import './aptoHeader.scss';
import { StandardTypes } from '../../utils/standardTypes';

interface Props extends StandardTypes {
  type?: '1' | '2' | '3' | '4' | '5' | '6';
}

const COMPONENT_PREFIX = 'AptoHeader';

class AptoHeader extends React.Component<Props> {
  public static defaultProps = {
    type: '1'
  };

  public render() {
    const {
      type,
      className,
      forwardRef,
      children,
      ...rest
    } = this.props;

    let Component: any = 'h1';

    switch (type) {
      case '2':
        Component = 'h2';
        break;
      case '3':
        Component = 'h3';
        break;
      case '4':
        Component = 'h4';
        break;
      case '5':
        Component = 'h5';
        break;
      case '6':
        Component = 'h6';
        break;
      case '1':
      default:
        Component = 'h1';
        break;
    }

    const classes = classNames(
      COMPONENT_PREFIX,
      type && `${COMPONENT_PREFIX}--h${type}`,
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

export default AptoHeader;