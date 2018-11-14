import React from 'react';
import classNames from 'classnames';

import './button.scss';

function missingHref(href) {
  return !href || href.trim() === '#';
}

const COMPONENT_PREFIX = 'AptoButton';

class AptoButton extends React.Component {
  static defaultProps = {
    kind: 'button',
    variant: 'primary',
    active: false,
    disabled: false
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const {disabled, href, onClick } = this.props;

    if (disabled || missingHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  }

  render() {
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

    const Component = href ? 'a' : 'button';

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
        disabled={disabled}
        onClick={this.handleClick}
        className={classes}>
          {children}
      </Component>
    );
  }
}

export default AptoButton;
