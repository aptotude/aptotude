import React from 'react';
import classNames from 'classnames';
import './aptoFormControlLabel.scss';

const COMPONENT_PREFIX = 'AptoFormControlLabel';

export interface AptoFormControlLabelDisplayProps {
  label?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  id?: string;
}

export class AptoFormControlLabel extends React.Component<AptoFormControlLabelDisplayProps> {
  public render() {
    const {
      label,
      error,
      required,
      id
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      required && `${COMPONENT_PREFIX}--required`,
      error && `${COMPONENT_PREFIX}--error`,
    );

    if (label) {
      return (
        <label
          htmlFor={id || undefined}
          className={classes}
        >
          {label} {required ? '*' : null}
        </label>
      );
    } else {
      return null;
    }
  }
}
