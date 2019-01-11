import React from 'react';
import { StandardTypes } from '../../utils/standardTypes';
import classNames from 'classnames';
import './aptoTable.scss';

const COMPONENT_PREFIX = 'AptoTable';

export interface AptoTableDisplayProps extends StandardTypes {
  striped?: boolean | undefined;
  bordered?: boolean | undefined;
  borderless?: boolean | undefined;
  hover?: boolean | undefined;
  small?: boolean | undefined;
  responsive?: boolean | undefined;
}

export class AptoTable extends React.PureComponent<AptoTableDisplayProps> {
  public static defaultProps = {
    striped: false,
    bordered: false,
    borderless: false,
    hover: false,
    small: false,
    responsive: false
  };
  public render() {
    const {
      children,
      striped,
      bordered,
      borderless,
      small,
      hover,
      responsive,
      ...rest
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      striped && `${COMPONENT_PREFIX}--striped`,
      bordered && `${COMPONENT_PREFIX}--bordered`,
      borderless && `${COMPONENT_PREFIX}--borderless`,
      hover && `${COMPONENT_PREFIX}--hover`,
      small && `${COMPONENT_PREFIX}--small`
    );

    const tableDom = (
      <table className={classes} {...rest}>
        {children}
      </table>
    );

    if (responsive) {
      return (
        <div className={`${COMPONENT_PREFIX}--responsive`}>{tableDom}</div>
      );
    }

    return tableDom;
  }
}
