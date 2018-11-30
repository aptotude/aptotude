import React from 'react';
import classNames from 'classnames';
import './aptoInput.scss';
import { AptoFormGroup, AptoFormGroupProps } from '../FormGroup/AptoFormGroup';

const COMPONENT_PREFIX = 'AptoInput';

export interface AptoInputProps {
  className?: string;
  inputClasses?: string;
  defaultValue?: any;
  disabled?: boolean;
  error?: React.ReactNode;
  id?: string;
  label?: React.ReactNode;
  maxLength?: number;
  multiline?: boolean;
  name?: string;
  onBlur?: React.FormEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onChange?: (value: any, event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  type?: string;
  value?: any;
  inline?: boolean;
}

export class AptoInput extends React.Component<AptoInputProps> {
  public static defaultProps = {
    multiline: false,
    required: false,
    rows: 1,
    type: 'text'
  };

  public inputNode: HTMLTextAreaElement | HTMLInputElement | null = null;

  public handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {
      onChange,
      maxLength,
      multiline
    } = this.props;

    let value = event.target.value;

    if (multiline && maxLength && value.length > maxLength) {
      value = value.substring(0, maxLength);
    }

    if (onChange) {
      onChange(value, event);
    }
  };

  public focus() {
    this.inputNode!.focus();
  }

  public blur() {
    this.inputNode!.blur();
  }

  public setNode = (node: HTMLTextAreaElement | HTMLInputElement | null) => {
    this.inputNode = node;
  };

  public render() {
    const {
      className,
      defaultValue,
      disabled,
      error,
      label,
      maxLength,
      multiline,
      onChange,
      readOnly,
      required,
      rows,
      type,
      inline,
      inputClasses,
      id,
      ...rest
    } = this.props;

    const InputComponent = multiline ? 'textarea' : 'input';

    const classes = classNames(
      COMPONENT_PREFIX,
      `${COMPONENT_PREFIX}--${multiline ? 'textarea' : 'input'}`,
      error && `${COMPONENT_PREFIX}--error`,
      inputClasses
    )

    const formGroupProps: AptoFormGroupProps = {
      className,
      label,
      error,
      maxLength,
      required,
      readOnly,
      disabled,
      inline,
      id
    }

    return (
      <AptoFormGroup {...formGroupProps}>
        <InputComponent
          className={classes}
          readOnly={readOnly}
          required={required}
          disabled={disabled}
          type={InputComponent === 'input' ? type : undefined}
          rows={InputComponent === 'textarea' ? rows : undefined}
          onChange={this.handleChange}
          ref={this.setNode}
          {...rest} />
      </AptoFormGroup>
    );
  }
}
