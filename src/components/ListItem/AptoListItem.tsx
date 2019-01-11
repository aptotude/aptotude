import React from 'react';
import classNames from 'classnames';
import './aptoListItem.scss';
import { StandardTypes } from '../../utils/standardTypes';

export interface AptoListItemDisplayProps extends StandardTypes {
  type?: 'li' | null | undefined;
  link?: boolean;
  active?: boolean;
  empty?: boolean;
}

const COMPONENT_PREFIX = 'AptoListItem';

export class AptoListItem extends React.Component<AptoListItemDisplayProps> {
  public static defaultProps = {
    link: false,
    active: false,
    empty: false
  };

  public render() {
    const {
      type,
      className,
      forwardRef,
      children,
      link,
      active,
      empty,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      type ? `${COMPONENT_PREFIX}--${type}` : undefined,
      link && `${COMPONENT_PREFIX}--link`,
      active && `${COMPONENT_PREFIX}--active`,
      empty && `${COMPONENT_PREFIX}--empty`,
      className
    );

    const Component: any = type || 'div';

    return (
      <Component {...rest} ref={forwardRef} className={classes}>
        <div className="AptoListItem-content">{children}</div>
      </Component>
    );
  }
}
