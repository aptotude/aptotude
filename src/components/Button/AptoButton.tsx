import React from 'react';
import classNames from 'classnames';
import './aptoButton.scss';
import { StandardTypes } from '../../utils/standardTypes';

export type ButtonKind = 'button' | 'link';
export type ButtonVariant =
  | 'primary'
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
}

export class AptoButton extends React.PureComponent<AptoButtonDisplayProps> {
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

    return (
      <Component
        {...rest}
        ref={forwardRef}
        aria-label={title}
        href={href}
        disabled={disabled || undefined}
        onClick={this.handleClick}
        className={classes}
      >
        {children}
      </Component>
    );
  }
}
