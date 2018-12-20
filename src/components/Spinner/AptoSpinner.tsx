import React from 'react';
import classNames from 'classnames';
import './aptoSpinner.scss';
import { StandardTypes } from '../../utils/standardTypes';

interface Props extends StandardTypes {
  text?: string;
  noOverlay?: boolean;
}

const COMPONENT_PREFIX = 'AptoSpinner';

export class AptoSpinner extends React.Component<Props> {
  public static defaultProps = {
    text: '',
    noOverlay: false
  };

  public render() {
    const {
      text,
      noOverlay,
      className,
      forwardRef,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      noOverlay && `${COMPONENT_PREFIX}--noOverlay`,
      className
    );

    return (
      <div
        {...rest}
        ref={forwardRef}
        className={classes}>
          <div className="AptoSpinner-spinner">
            <svg viewBox="0 0 64 64">
              <circle transform="translate(32,32)" r="26"/>
            </svg>
          </div>
          {
            text ? <div className="AptoSpinner-content">{text}</div> : null
          }
      </div>
    );
  }
}
