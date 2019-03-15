import * as React from 'react';
import EventListener from 'react-event-listener';
import './AptoSnackbarItem.scss';
import { AptoAlertVariants, AptoAlert } from '../Alert';

interface AptoSnackbarItemProps {
  open?: boolean;
  action?: React.ReactNode;
  message?: React.ReactNode;
  variant?: AptoAlertVariants;
  autoHideDuration?: number;
  animationTimeout?: number;
  disableWindowBlurListener?: boolean;
  onMouseLeave?: (event: React.MouseEvent | null) => void;
  onMouseEnter?: (event: React.MouseEvent | null) => void;
  onClose?: (event: React.MouseEvent | null, type: string) => void;
  resumeHideDuration?: number;
}

interface AptoSnackbarItemState {
  exited: boolean;
  hiding: boolean;
}

export class AptoSnackbarItem extends React.Component<
  AptoSnackbarItemProps,
  AptoSnackbarItemState
> {
  public static defaultProps = {
    disableWindowBlurListener: false,
    variant: 'info',
    autoHideDuration: 5000,
    animationTimeout: 255
  };

  public state = {
    exited: false,
    hiding: false
  };

  public animationId = null;

  public timerAutoHide: any = null;

  public componentDidMount() {
    if (this.props.open) {
      this.setAutoHideTimer();
    }
  }

  public componentDidUpdate(prevProps: any) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        this.setAutoHideTimer();
      } else {
        clearTimeout(this.timerAutoHide);
      }
    }
  }

  public componentWillUnmount() {
    clearTimeout(this.timerAutoHide);
  }

  public static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.open) {
      return {
        exited: false
      };
    } else {
      return {
        exited: true
      };
    }
  }

  public setAutoHideTimer(autoHideDuration: number | null = null) {
    const autoHideDurationBefore =
      autoHideDuration != null ? autoHideDuration : this.props.autoHideDuration;

    if (!this.props.onClose || autoHideDurationBefore == null) {
      return;
    }

    clearTimeout(this.timerAutoHide);
    this.timerAutoHide = setTimeout(() => {
      const autoHideDurationAfter =
        autoHideDuration != null
          ? autoHideDuration
          : this.props.autoHideDuration;
      if (!this.props.onClose || autoHideDurationAfter == null) {
        return;
      }

      this.animateClose(null, 'timeout');
    }, autoHideDurationBefore);
  }

  public handleMouseEnter = (event: React.MouseEvent) => {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
    this.handlePause();
  };

  public handleMouseLeave = (event: React.MouseEvent) => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
    this.handleResume();
  };

  public animateClose(event: any, type: string) {
    this.setState({
      hiding: true
    });

    setTimeout(() => {
      this.props.onClose && this.props.onClose(event, type);
    }, this.props.animationTimeout);
  }

  public handlePause = () => {
    clearTimeout(this.timerAutoHide);
  };

  public handleResume = () => {
    if (this.props.autoHideDuration != null) {
      if (this.props.resumeHideDuration != null) {
        this.setAutoHideTimer(this.props.resumeHideDuration);
        return;
      }
      this.setAutoHideTimer(this.props.autoHideDuration * 0.5);
    }
  };

  public handleExited = () => {
    this.setState({ exited: true });
  };

  public render() {
    const {
      variant,
      autoHideDuration,
      children,
      message,
      action,
      disableWindowBlurListener,
      onClose,
      onMouseEnter,
      onMouseLeave,
      open,
      animationTimeout,
      resumeHideDuration,
      ...rest
    } = this.props;

    if (!open && this.state.exited) {
      return null;
    }

    const hiding = this.state.hiding ? ' AptoSnackbarItem--hide' : '';

    return (
      <div
        className={`AptoSnackbarItem${hiding}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...rest}
      >
        <EventListener
          target="window"
          onFocus={disableWindowBlurListener ? undefined : this.handleResume}
          onBlur={disableWindowBlurListener ? undefined : this.handlePause}
        />
        <AptoAlert variant={variant} className="AptoSnackbarItemContent">
          {children || (
            <React.Fragment>
              <div className="AptoSnackbarItemContentMessage">{message}</div>
              <div className="AptoSnackbarItemContentAction">{action}</div>
            </React.Fragment>
          )}
        </AptoAlert>
      </div>
    );
  }
}
