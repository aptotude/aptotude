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
  onHold?: () => void;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  href?: string;
  role?: string;
  title?: string;
  target?: string;
  type?: string;
  to?: string;
  hold?: boolean;
}

export class AptoButton extends React.Component<AptoButtonDisplayProps> {
  public buttonRef: React.RefObject<{}>;
  public holdTimer: any = null;
  public static defaultProps = {
    kind: 'button',
    variant: 'primary',
    active: false,
    disabled: false,
    hold: false
  };

  public constructor(props = {}) {
    super(props);
    this.buttonRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  public handleMouseDown(
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) {
    const { onHold, disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setHoldStatus(true);

    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
    }

    this.holdTimer = setTimeout(() => {
      this.setHoldStatus(false);
      if (onHold) {
        onHold();
      }
    }, 2000);
  }

  public handleMouseUp(
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) {
    this.setHoldStatus(false);

    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
    }
  }

  public handleClick(
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) {
    const { disabled, onClick, hold } = this.props;

    if (disabled || hold) {
      if (event) {
        event.preventDefault();
      }
    }

    if (disabled || hold) {
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
      className,
      children,
      disabled,
      active,
      href,
      to,
      title,
      hold,
      onHold,
      target,
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
      hold && `${COMPONENT_PREFIX}Hold`,
      disabled && `${COMPONENT_PREFIX}--disabled`,
      active && `${COMPONENT_PREFIX}--active`,
      className
    );

    const propList: any = {
      'aria-label': title,
      onClick: this.handleClick,
      className: classes,
      target,
      ...rest
    };

    if (hold) {
      propList.onMouseDown = this.handleMouseDown;
      propList.onMouseUp = this.handleMouseUp;
      propList.onMouseOut = this.handleMouseUp;
      propList.onTouchStart = this.handleMouseDown;
      propList.onTouchEnd = this.handleMouseUp;
      propList.onTouchMove = this.handleMouseUp;
    }

    if (propList.target && propList.target === '_blank') {
      propList.rel = 'noopener noreferrer';
    }

    // if we use the to attribute, we render the button as a reach router link
    if (to) {
      return (
        <Link to={to} {...propList}>
          {children}
        </Link>
      );
    }

    return (
      <Component
        ref={this.buttonRef}
        href={href}
        disabled={disabled || undefined}
        {...propList}
      >
        {children}
        {hold && (
          <span className="AptoButtonHold-progressBarWrapper">
            <span className="AptoButtonHold-progressBar">&nbsp;</span>
          </span>
        )}
      </Component>
    );
  }

  private setHoldStatus(active = true) {
    const node: any = this.buttonRef && this.buttonRef.current;
    if (node) {
      if (active) {
        node.classList.add('AptoButtonHold--processing');
      } else {
        node.classList.remove('AptoButtonHold--processing');
      }
    }
  }
}
