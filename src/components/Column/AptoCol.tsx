import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoCol.scss';
import capitalize from '../../utils/capitalize';

const COMPONENT_PREFIX = 'AptoCol';

export type AptoColSize = 'auto' | 'true' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface AptoColDisplayProps extends StandardTypes {
  xs?: AptoColSize;
  sm?: AptoColSize;
  md?: AptoColSize;
  lg?: AptoColSize;
  xl?: AptoColSize;
  align?: 'start' | 'center' | 'end' | null | undefined;
}

export class AptoCol extends React.PureComponent<AptoColDisplayProps> {
  public render() {
    const {
      children,
      className,
      forwardRef,
      align,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      this._getClass(),
      align && `${COMPONENT_PREFIX}--align${capitalize(align)}`,
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
    return classes.length ? classes.join(' ') : '';
  }

  private _parseAttribute(count: any, size: string): string {
    if (size !== '') {
      size = `-${size}`;
    }
    return count === 'true' ? `${COMPONENT_PREFIX}${size}` : `${COMPONENT_PREFIX}${size}-${count}`;
  }
}
