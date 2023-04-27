import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInputState {
  value: string;
  error?: string;
}

export interface IFormState {
  name: IInputState;
  email: IInputState;
  password: IInputState;
  confirmPassword: IInputState;
}

const initialState: IFormState = {
  name: {
    value: '',
    error: '',
  },
  email: {
    value: '',
    error: '',
  },
  password: {
    value: '',
    error: '',
  },
  confirmPassword: {
    value: '',
    error: '',
  },
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<IFormState>) => {
      // state[action.payload.key] = action.payload.change;
      return (state = action.payload);
    },
    resetState: (state) => {
      return (state = initialState);
    },
  },
});

export const { updateState, resetState } = signupSlice.actions;
