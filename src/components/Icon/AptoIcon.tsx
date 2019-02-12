import React from 'react';
import classNames from 'classnames';
import './aptoIcon.scss';
import capitalize from '../../utils/capitalize';
import { StandardTypes } from '../../utils/standardTypes';
const COMPONENT_PREFIX = 'AptoIcon';

export type AptoIconColors =
  | 'white'
  | 'blue'
  | 'orange'
  | 'gray'
  | 'lightGray'
  | undefined;
export type AptoIconStatus = 'warning' | 'danger' | undefined;
export type AptoIconIcon =
  | React.ComponentClass<any>
  | React.StatelessComponent<any>;
export type AptoIconSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | undefined;
export type AptoIconCircle = boolean | undefined;
export type AptoIconInline = boolean | undefined;

interface AptoIconProps extends StandardTypes {
  circleColor?: AptoIconColors;
  color?: AptoIconColors;
  status?: AptoIconStatus;
  inline?: AptoIconInline;
  circle?: AptoIconCircle;
  size?: AptoIconSize;
  icon: AptoIconIcon;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
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
      color,
      circleColor,
      icon: Component,
      status,
      className
    } = this.props;
    const classes = classNames(
      COMPONENT_PREFIX,
      `${COMPONENT_PREFIX}--size${size}`,
      inline ? `${COMPONENT_PREFIX}--inline` : null,
      circle ? `${COMPONENT_PREFIX}--circle` : null,
      status ? `${COMPONENT_PREFIX}--status${capitalize(status)}` : null,
      color ? `${COMPONENT_PREFIX}--color${capitalize(color)}` : null,
      circleColor
        ? `${COMPONENT_PREFIX}--circleColor${capitalize(circleColor)}`
        : null,
      className
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
