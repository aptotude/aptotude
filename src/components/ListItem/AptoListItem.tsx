import React from 'react';
import classNames from 'classnames';
import './aptoListItem.scss';
import { StandardTypes } from '../../utils/standardTypes';
import {
  AptoIcon,
  AptoIconStatus,
  AptoIconColors,
  AptoIconSize,
  AptoIconIcon,
  AptoIconCircle
} from '../Icon';

export interface AptoListItemDisplayProps extends StandardTypes {
  type?: 'li' | null | undefined;
  link?: boolean;
  active?: boolean;
  empty?: boolean;
  icon?: AptoIconIcon;
  iconSize?: AptoIconSize;
  iconCircleColor?: AptoIconColors;
  iconColor?: AptoIconColors;
  iconStatus?: AptoIconStatus;
  iconCircle?: AptoIconCircle;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const COMPONENT_PREFIX = 'AptoListItem';

export class AptoListItem extends React.Component<AptoListItemDisplayProps> {
  public static defaultProps = {
    link: false,
    active: false,
    empty: false,
    icon: undefined
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
      icon,
      iconSize,
      iconCircleColor,
      iconColor,
      iconStatus,
      iconCircle,
      ...rest
    } = this.props;

    const iconProps = {
      size: iconSize,
      circleColor: iconCircleColor,
      color: iconColor,
      status: iconStatus,
      circle: iconCircle
    };

    const classes = classNames(
      COMPONENT_PREFIX,
      type ? `${COMPONENT_PREFIX}--${type}` : undefined,
      icon && `${COMPONENT_PREFIX}--icon`,
      link && `${COMPONENT_PREFIX}--link`,
      active && `${COMPONENT_PREFIX}--active`,
      empty && `${COMPONENT_PREFIX}--empty`,
      className
    );

    const Component: any = type || 'div';

    return (
      <Component {...rest} ref={forwardRef} className={classes}>
        {icon && (
          <div className="AptoListItem-iconWrapper">
            <AptoIcon inline={true} {...iconProps} icon={icon} />
          </div>
        )}
        <div className="AptoListItem-content">{children}</div>
      </Component>
    );
  }
}
