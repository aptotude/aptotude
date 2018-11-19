import React from 'react';
import classNames from 'classnames';
import './aptoLoader.scss';
import { StandardTypes } from '../../utils/standardTypes';

interface Props extends StandardTypes {
  text?: string;
  noOverlay?: boolean;
}

const COMPONENT_PREFIX = 'AptoLoader';

class AptoLoader extends React.Component<Props> {
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

    const Component = 'div';

    const classes = classNames(
      COMPONENT_PREFIX,
      noOverlay && `${COMPONENT_PREFIX}--noOverlay`,
      className
    );

    return (
      <Component
        {...rest}
        ref={forwardRef}
        className={classes}>
          <div className="AptoLoader-spinner">
            <svg viewBox="0 0 64 64">
              <circle transform="translate(32,32)" r="26"/>
            </svg>
          </div>
          {
            text ? <div className="AptoLoader-content">{text}</div> : null
          }
      </Component>
    );
  }
}

export default AptoLoader;
