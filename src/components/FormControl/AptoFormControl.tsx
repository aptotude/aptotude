import React from 'react';
import classNames from 'classnames';
import './aptoFormControl.scss';
import { AptoFormControlLabel } from '../FormControlLabel/AptoFormControlLabel';

const COMPONENT_PREFIX = 'AptoFormControl';

export interface AptoFormControlDisplayProps {
  label?: React.ReactNode;
  error?: React.ReactNode;
  maxLength?: number;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
  inline?: boolean;
  id?: string;
}

export class AptoFormControl extends React.Component<AptoFormControlDisplayProps> {

  public render() {
    const {
      className,
      children: inputField,
      label,
      error,
      required,
      disabled,
      id
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      required && `${COMPONENT_PREFIX}--required`,
      disabled && `${COMPONENT_PREFIX}--disabled`,
      error && `${COMPONENT_PREFIX}--error`,
      className
    );

    return (
      <div className={classes}>
        {inputField}
        <AptoFormControlLabel label={label} id={id} required={required} error={error} />
        {error ? <p className={`${COMPONENT_PREFIX}-errorMessage`}>{error}</p> : null}
      </div>
    )
  }
}
