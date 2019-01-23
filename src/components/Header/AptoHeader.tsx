import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoHeader.scss';

const COMPONENT_PREFIX = 'AptoHeader';

export interface AptoHeaderDisplayProps extends StandardTypes {
  type?: '1' | '2' | '3' | '4' | '5' | '6';
  transform: boolean;
}

export class AptoHeader extends React.Component<AptoHeaderDisplayProps> {
  public static defaultProps = {
    type: '1',
    transform: true
  };

  public render() {
    const {
      type,
      transform,
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
      !transform ? `${COMPONENT_PREFIX}--noTransform` : null,
      className
    );

    return (
      <Component {...rest} ref={forwardRef} className={classes}>
        {children}
      </Component>
    );
  }
}
