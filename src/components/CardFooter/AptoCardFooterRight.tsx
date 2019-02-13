import React from 'react';
import { StandardTypes } from '../../utils/standardTypes';
import classNames from 'classnames';

interface AptoCardFooterRightProps extends StandardTypes {
  children: any;
}

const COMPONENT_PREFIX = 'AptoCardFooter-Right';

export const AptoCardFooterRight = (props: AptoCardFooterRightProps) => {
  const { children, className, ...rest } = props;
  const classes = classNames(COMPONENT_PREFIX, className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
