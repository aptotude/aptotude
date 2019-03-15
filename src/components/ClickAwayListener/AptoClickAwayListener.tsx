import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EventListener from 'react-event-listener';

export interface AptoClickAwayListenerProps {
  mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | false;
  touchEvent?: 'onTouchStart' | 'onTouchEnd' | false;
  onClickAway?: (event: React.MouseEvent) => void;
}

export class AptoClickAwayListener extends React.Component<
  AptoClickAwayListenerProps
> {
  public mounted = false;
  public moved = false;
  public node: any = null;

  public componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    this.mounted = true;
  }

  public componentWillUnmount() {
    this.mounted = false;
  }

  public handleClickAway = (event: React.MouseEvent) => {
    // Ignore events that have been `event.preventDefault()` marked.
    if (event.defaultPrevented) {
      return;
    }

    if (!this.mounted) {
      return;
    }

    if (this.moved) {
      this.moved = false;
      return;
    }

    if (!this.node) {
      return;
    }

    const doc = (this.node && this.node.ownerDocument) || document;

    if (
      doc.documentElement &&
      doc.documentElement.contains(event.target) &&
      !this.node.contains(event.target)
    ) {
      this.props.onClickAway && this.props.onClickAway(event);
    }
  };

  public handleTouchMove = () => {
    this.moved = true;
  };

  public render() {
    const {
      children,
      mouseEvent,
      touchEvent,
      onClickAway,
      ...rest
    } = this.props;
    const listenerProps: any = {};
    if (mouseEvent !== false && mouseEvent !== undefined) {
      listenerProps[mouseEvent] = this.handleClickAway;
    }
    if (touchEvent !== false && touchEvent !== undefined) {
      listenerProps[touchEvent] = this.handleClickAway;
      listenerProps.onTouchMove = this.handleTouchMove;
    }
    return (
      <React.Fragment>
        {children}
        <EventListener target="document" {...listenerProps} {...rest} />
      </React.Fragment>
    );
  }
}
