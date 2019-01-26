import React from 'react';
import classNames from 'classnames';
import './aptoButton.scss';
import { StandardTypes } from '../../utils/standardTypes';
import { Link } from '@reach/router';

export type ButtonKind = 'button' | 'link';
export type ButtonVariant =
  | 'primary'
  | 'primaryInverse'
  | 'secondary'
  | 'secondaryDark'
  | 'white'
  | 'danger';

const COMPONENT_PREFIX = 'AptoButton';

export interface AptoButtonDisplayProps extends StandardTypes {
  kind?: ButtonKind;
  variant?: ButtonVariant;
  active?: boolean;
  disabled?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  href?: string;
  role?: string;
  title?: string;
  target?: string;
  type?: string;
  to?: string;
}

export class AptoButton extends React.Component<AptoButtonDisplayProps> {
  public static defaultProps = {
    kind: 'button',
    variant: 'primary',
    active: false,
    disabled: false
  };

  public constructor(props = {}) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) {
    const { disabled, onClick } = this.props;

    if (disabled) {
      if (event) {
        event.preventDefault();
      }
    }

    if (disabled) {
      if (event) {
        event.stopPropagation();
      }
      return;
    }

    if (onClick) {
      onClick(event);
    }
  }

  public render() {
    const {
      variant,
      kind,
      forwardRef,
      className,
      children,
      disabled,
      active,
      href,
      to,
      title,
      ...rest
    } = this.props;

    if (href && href === '#') {
      rest.role = rest.role || 'button';
    }

    const Component: any = href ? 'a' : 'button';

    const classes = classNames(
      COMPONENT_PREFIX,
      `${COMPONENT_PREFIX}--${kind}`,
      `${COMPONENT_PREFIX}--${variant}`,
      disabled && `${COMPONENT_PREFIX}--disabled`,
      active && `${COMPONENT_PREFIX}--active`,
      className
    );

    const propList = {
      ref: forwardRef,
      'aria-label': title,
      onClick: this.handleClick,
      className: classes,
      ...rest
    };

    // if we use the to attribute, we render the button as a reach router link
    if (to) {
      return (
        <Link to={to} {...propList}>
          {children}
        </Link>
      );
    }

    return (
      <Component href={href} disabled={disabled || undefined} {...propList}>
        {children}
      </Component>
    );
  }
}
