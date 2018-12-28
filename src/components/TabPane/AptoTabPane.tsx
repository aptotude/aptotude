import React from 'react';
import './aptoTabPane.scss';
import classNames from 'classnames';

export interface AptoTabPaneDisplayProps {
  group: number,
  index: number,
  active: boolean,
  className?: string
}

const COMPONENT_PREFIX = 'AptoTabPane';

export class AptoTabPane extends React.Component<AptoTabPaneDisplayProps> {
  public render() {
    const {
      children,
      group,
      index,
      active,
      className
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      active ? `${COMPONENT_PREFIX}--active` : null,
      className
    );

    return (
      <div
        className={classes}
        role="tabpanel"
        id={`${COMPONENT_PREFIX}-${group}-${index}`}
        aria-labelledby={`AptoTabNav-${group}-${index}`}
        aria-hidden={!active}>
        { active ? children : null}
      </div>
    );
  }
}
