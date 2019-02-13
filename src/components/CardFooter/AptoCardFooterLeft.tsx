import React from 'react';
import { StandardTypes } from '../../utils/standardTypes';
import classNames from 'classnames';

interface AptoCardFooterLeftProps extends StandardTypes {
  children: any;
}

const COMPONENT_PREFIX = 'AptoCardFooter-Left';

export const AptoCardFooterLeft = (props: AptoCardFooterLeftProps) => {
  const { children, className, ...rest } = props;
  const classes = classNames(COMPONENT_PREFIX, className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
