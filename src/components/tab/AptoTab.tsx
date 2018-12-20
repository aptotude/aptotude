import React from 'react';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoTab.scss';
import classNames from 'classnames';

interface Props extends StandardTypes {
  active?: boolean,
  tabGroupId?: number,
  tabIndex?: number
  title?: string | JSX.Element,
  onActivate?: () => void
}

const COMPONENT_PREFIX = 'AptoTabNav-item';

class AptoTab extends React.Component<Props> {
  public static defaultProps = {
    tabGroupId: 0,
    tabIndex: 0,
    active: false,
    title: ''
  };

  public onClickTab = (event: React.MouseEvent | React.FocusEvent) => {
    const { onActivate } = this.props;
    if (event) {
      event.preventDefault();
    }
    if (onActivate) {
      onActivate();
    }
  };

  public render() {
    const {
      active,
      forwardRef,
      title,
      tabGroupId,
      tabIndex,
      className,
      ...rest
    } = this.props;

    delete rest.onActivate;

    const classes = classNames(
      COMPONENT_PREFIX,
      active && `${COMPONENT_PREFIX}--active`,
      className
    );

    return(
      <button
        key={`AptoTabNav-${tabGroupId}-${tabIndex}`}
        ref={forwardRef}
        className={classes}
        role="tab"
        tabIndex={active ? 0 : -1}
        id={`AptoTabNav-${tabGroupId}-${tabIndex}`}
        aria-controls={`AptoTabPane-${tabGroupId}-${tabIndex}`}
        aria-selected={active}
        onClick={this.onClickTab}
        {...rest}>
        {title}
      </button>
    );
  }
}

export default AptoTab;