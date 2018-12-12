import React from 'react';
import classNames from 'classnames';
import './aptoListItem.scss';
import { StandardTypes } from '../../utils/standardTypes';

interface Props extends StandardTypes {
  type?: 'li' | null | undefined;
  link?: boolean;
  active?: boolean;
}

const COMPONENT_PREFIX = 'AptoListItem';

export default class AptoListItem extends React.Component<Props> {
  public static defaultProps = {
    link: null
  };

  public render() {
    const {
      type,
      className,
      forwardRef,
      children,
      link,
      active,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      type ? `${COMPONENT_PREFIX}--${type}` : undefined,
      link && `${COMPONENT_PREFIX}--link`,
      active && `${COMPONENT_PREFIX}--active`,
      className
    );

    const Component = type || 'div';

    return (
      <Component
        {...rest}
        ref={forwardRef}
        className={classes}>
          <div className="AptoListItem-content">
            <div className="AptoListItem-text">
              {children}
            </div>
          </div>
      </Component>
    );
  }
}
