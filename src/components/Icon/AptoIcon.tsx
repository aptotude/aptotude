import React from 'react';
import classNames from 'classnames';
import './aptoIcon.scss';
import capitalize from '../../utils/capitalize';
const COMPONENT_PREFIX = 'AptoIcon';

interface AptoIconProps {
  circleColor?: 'white' | 'blue' | 'orange' | 'gray' | 'lightGray';
  status?: 'warning' | 'danger';
  inline?: boolean;
  circle?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6';
  icon: React.ComponentClass<any> | React.StatelessComponent<any>;
}

class AptoIcon extends React.Component<AptoIconProps> {
  public static defaultProps = {
    inline: false,
    circle: false,
    size: 3
  };

  public render() {
    const {
      inline,
      circle,
      size,
      circleColor,
      icon: Component,
      status
    } = this.props;
    const classes = classNames(
      COMPONENT_PREFIX,
      `${COMPONENT_PREFIX}--size${size}`,
      inline ? `${COMPONENT_PREFIX}--inline` : null,
      circle ? `${COMPONENT_PREFIX}--circle` : null,
      status ? `${COMPONENT_PREFIX}--status${capitalize(status)}` : null,
      circleColor
        ? `${COMPONENT_PREFIX}--color${capitalize(circleColor)}`
        : null
    );

    const svgProps = {
      height: '100%',
      width: '100%',
      preserveAspectRatio: 'xMidYMid meet',
      focusable: 'false'
    };
    return (
      <span className={classes}>
        <Component {...svgProps} />
        {status && <span className="AptoIcon-status">!</span>}
      </span>
    );
  }
}

export { AptoIcon };
