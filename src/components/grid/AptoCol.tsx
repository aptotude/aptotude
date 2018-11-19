import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoCol.scss';

const COMPONENT_PREFIX = 'AptoCol';

type RowType = 'auto' | 'true' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

interface Props extends StandardTypes {
  xs?: RowType;
  sm?: RowType;
  md?: RowType;
  lg?: RowType;
  xl?: RowType;
}

class AptoCol extends React.Component<Props> {
  public render() {
    const {
      children,
      className,
      forwardRef,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      this._getClass(),
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

  private _getClass(): string {
    const classes: string[] = [];
    if (this.props.xs) {
      classes.push(this._parseAttribute(this.props.xs, ''));
    }
    if (this.props.sm) {
      classes.push(this._parseAttribute(this.props.sm, 'sm'));
    }
    if (this.props.md) {
      classes.push(this._parseAttribute(this.props.md, 'md'));
    }
    if (this.props.lg) {
      classes.push(this._parseAttribute(this.props.lg, 'lg'));
    }
    if (this.props.xl) {
      classes.push(this._parseAttribute(this.props.xl, 'xl'));
    }
    if (classes.length) {
      return classes.join(' ');
    }
    return '';
  }

  private _parseAttribute(count: any, size: string): string {
    if (size !== '') {
      size = `-${size}`;
    }
    if (count === 'true') {
      return `${COMPONENT_PREFIX}${size}`;
    } else {
      return `${COMPONENT_PREFIX}${size}-${count}`;
    }
  }
}

export default AptoCol;