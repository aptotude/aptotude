import React from 'react';
import classNames from 'classnames';
import './aptoInput.scss';
import {
  AptoFormControl,
  AptoFormControlDisplayProps
} from '../FormControl/AptoFormControl';

const COMPONENT_PREFIX = 'AptoInput';

export interface AptoInputDisplayProps {
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
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  type?: string;
  value?: any;
  inline?: boolean;
}

export class AptoInput extends React.Component<AptoInputDisplayProps> {
  public static defaultProps = {
    multiline: false,
    required: false,
    rows: 1,
    type: 'text'
  };

  public inputNode: HTMLTextAreaElement | HTMLInputElement | null = null;

  public handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(event);
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
    );

    const formGroupProps: AptoFormControlDisplayProps = {
      className,
      label,
      error,
      required,
      readOnly,
      disabled,
      inline,
      id
    };

    return (
      <AptoFormControl {...formGroupProps}>
        <InputComponent
          className={classes}
          readOnly={readOnly}
          required={required}
          disabled={disabled}
          type={InputComponent === 'input' ? type : undefined}
          rows={InputComponent === 'textarea' ? rows : undefined}
          onChange={this.handleChange}
          ref={this.setNode}
          {...rest}
        />
      </AptoFormControl>
    );
  }
}
