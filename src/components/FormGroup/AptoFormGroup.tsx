import React from 'react';
import classNames from 'classnames';
import './aptoFormGroup.scss';

const COMPONENT_PREFIX = 'AptoFormGroup';

export interface AptoFormGroupProps {
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

export class AptoFormGroup extends React.Component<AptoFormGroupProps> {
  public render() {
    const {
      className,
      children: inputField,
      label,
      error,
      maxLength,
      required,
      readOnly,
      disabled,
      inline,
      id
    } = this.props;

    const classes = classNames(
      COMPONENT_PREFIX,
      inline && `${COMPONENT_PREFIX}--inline`,
      required && `${COMPONENT_PREFIX}--required`,
      readOnly && `${COMPONENT_PREFIX}--readonly`,
      disabled && `${COMPONENT_PREFIX}--disabled`,
      error && `${COMPONENT_PREFIX}--error`,
      className
    );

    return (
      <div className={classes}>
        {inputField}
        {label
          ? (
              <label
                htmlFor={id || undefined}
                className={`${COMPONENT_PREFIX}-label`}
              >
                {label} {required ? '*' : null}
              </label>
            )
            : null}
        {error ? <span className={`${COMPONENT_PREFIX}-errorMessage`}>{error}</span> : null}
        {maxLength ? (
          <span className={`${COMPONENT_PREFIX}-counterMessage`}>
            {`${length}/${maxLength}`}
          </span>
        ) : null}
      </div>
    )
  }
}
