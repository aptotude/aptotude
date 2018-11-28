import React, { Component, cloneElement, Children } from 'react';
import { StandardTypes } from '../../utils/standardTypes';
import './aptoTabs.scss';
import AptoTabPane from '../TabPane/AptoTabPane';
import classNames from 'classnames';
import { HOME, END, RIGHT_ARROW, LEFT_ARROW } from '../../utils/keycodes';

let nextId = 0;

interface Props extends StandardTypes {
  activeIndex?: number;
  onActive?: (index: number) => void
}

interface State {
  activeIndex?: number;
}

export default class AptoTabs extends Component<Props, State> {
  private tabCount = 0;

  constructor(props: Props = {}) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex || 0
    }
    nextId += 1;
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  public static getDerivedStateFromProps(nextProps: any, prevState: any) {
    const { activeIndex } = nextProps;
    const { activeIndex: stateActiveIndex } = prevState;
    if (stateActiveIndex !== activeIndex && activeIndex !== undefined) {
      return { activeIndex };
    }
    return { activeIndex: stateActiveIndex || 0 };
  }

  public activateTab = (index: number) => {
    const { activeIndex, onActive } = this.props;
    if (index >= this.tabCount) {
      index = 0;
    }
    if (index < 0) {
      index = 0;
    }
    if (activeIndex === undefined) {
      this.setState({ activeIndex: index });
    }
    if (onActive) {
      onActive(index);
    }
  };

  public keyDownHandler(event: React.KeyboardEvent<HTMLElement>) {
    let t = this.state.activeIndex || 0;
    switch (event.keyCode) {
      case HOME:
        this.activateTab(0);
        event.preventDefault();
        break;
      case END:
        this.activateTab(this.tabCount - 1);
        event.preventDefault();
        break;
      case RIGHT_ARROW:
        t = t + 1;
        this.activateTab(t);
        event.preventDefault();
        break;
      case LEFT_ARROW:
        t = t - 1
        if (t < 0) {
          t = this.tabCount - 1;
        }
        this.activateTab(t);
        event.preventDefault();
        break;
      default:
    }
  };

  public render() {
    const {
      children,
      className,
      ...rest
    } = this.props;
    delete rest.activeIndex;
    delete rest.onActive;

    const { activeIndex } = this.state;
    const tabContent: JSX.Element[] = [];
    this.tabCount = Children.count(children);

    const tabs = Children.map(children, (tab: any, index) => {
      if (!tab) {
        return undefined;
      }

      const tabProps = tab.props || {};
      const isTabActive = index === activeIndex;

      tabContent.push(
        <AptoTabPane
          key={`AptoTabPane-${nextId}-${index}`}
          active={isTabActive}
          group={nextId}
          index={index}>
          {tabProps.children}
        </AptoTabPane>
      );

      return cloneElement(tab, {
        active: isTabActive,
        onActivate: () => this.activateTab(index),
        tabGroupId: nextId,
        tabIndex: index
      });
    });

    const classes = classNames(
      'AptoTabGroup',
      className
    );

    return (
      <div className={classes}>
        <div className="AptoTabNav-wrapper">
          <nav
            className="AptoTabNav"
            role="tablist"
            onKeyDown={this.keyDownHandler}>
            {tabs}
          </nav>
        </div>
        <div className="AptoTabPane-wrapper">
          {tabContent}
        </div>
      </div>
    );
  }
}
