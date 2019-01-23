import React from 'react';
import classNames from 'classnames';
import './aptoParagraph.scss';
import { StandardTypes } from '../../utils/standardTypes';

export interface AptoParagraphDisplayProps extends StandardTypes {
  compact?: boolean | undefined;
}

const COMPONENT_PREFIX = 'AptoParagraph';

export class AptoParagraph extends React.Component<
  AptoParagraphDisplayProps
> {
  public render() {
    const { compact, className, forwardRef, children, ...rest } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      compact && `${COMPONENT_PREFIX}--compact`,
      className
    );

    return (
      <p {...rest} ref={forwardRef} className={classes}>
        {children}
      </p>
    );
  }
}
