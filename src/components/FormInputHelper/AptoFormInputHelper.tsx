import React from 'react';
import { InputProps } from 'semantic-ui-react';
import { AptoInput } from '../Input';
import { AptoFormControlError } from '../FormControlError';
import { AptoForm } from '../Form/AptoForm';

export interface AptoInputOnChangeData extends InputProps {
  value: string;
}

export interface AptoFormInputHelperProps {
  required?: boolean;
  label: string;
  name: string;
  value: any;
  error?: string;
  change: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: AptoInputOnChangeData
  ) => void;
  length?: number;
}

export const AptoFormInputHelper = (
  props: AptoFormInputHelperProps
): JSX.Element => {
  const { required, label, name, value, error, change, length } = props;
  const id = `input-${name}`;
  return (
    <AptoForm.Field required={required}>
      <label htmlFor={id}>{label}</label>
      <AptoInput
        maxLength={length || 255}
        required={required}
        value={value || ''}
        error={error ? true : undefined}
        onChange={change}
        name={name}
        id={id}
      />
      <AptoFormControlError error={error} />
    </AptoForm.Field>
  );
};
