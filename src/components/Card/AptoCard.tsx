import React from 'react';
import classNames from 'classnames';
import './aptoCard.scss';
import { StandardTypes } from '../../utils/standardTypes';
import { AptoSpinner } from '../Spinner';

const COMPONENT_PREFIX = 'AptoCard';

export interface AptoCardDisplayProps extends StandardTypes {
  elevation?: 0 | 1 | '0' | '1';
  loading?: boolean;
  loadingText?: string;
}

export class AptoCard extends React.Component<AptoCardDisplayProps> {
  public static defaultProps = {
    elevation: 1,
    loading: false,
    loadingText: ''
  };

  public render() {
    const {
      className,
      elevation,
      forwardRef,
      children,
      loading,
      loadingText,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      elevation && `${COMPONENT_PREFIX}--elevation${elevation}`,
      className
    );

    return (
      <div {...rest} ref={forwardRef} className={classes}>
        {children}
        {loading && <AptoSpinner text={loadingText} />}
      </div>
    );
  }
}
