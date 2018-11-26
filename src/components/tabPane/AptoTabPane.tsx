import React, { Component } from 'react';
import './tab-pane.scss';
import classNames from 'classnames';

interface Props {
  group: number,
  index: number,
  active: boolean
}

const COMPONENT_PREFIX = 'AptoTabPane';

export default class AptoTabPane extends Component<Props> {
  public render() {
    const {
      children,
      group,
      index,
      active
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      active ? `${COMPONENT_PREFIX}--active` : null
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
