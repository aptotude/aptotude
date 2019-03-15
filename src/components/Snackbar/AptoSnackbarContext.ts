import React from 'react';
import { AptoAlertVariants } from '../Alert';

export interface AptoSnack {
  message: React.ReactNode;
  id: number;
  action?: React.ReactNode;
  type?: AptoAlertVariants;
}

export interface AptoSnackbarContextInterface {
  snacks: AptoSnack[];
  showSnack: (
    message: React.ReactNode,
    type?: AptoAlertVariants,
    action?: React.ReactNode | null
  ) => void;
  hideSnack: (snack: AptoSnack, event: React.MouseEvent | null) => void;
}

export const aptoSnackbarContextInitialState: AptoSnackbarContextInterface = {
  snacks: [],
  hideSnack: (snack: AptoSnack, event: React.MouseEvent | null) => {},
  showSnack: (
    message: React.ReactNode,
    type: AptoAlertVariants = 'info',
    action: React.ReactNode | null = null
  ) => {}
};

export const AptoSnackbarContext = React.createContext<
  AptoSnackbarContextInterface
>(aptoSnackbarContextInitialState);
