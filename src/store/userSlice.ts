import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: string;
  userName: string;
}

const initialState: Array<User> = [];

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
    reset: () => initialState,
  },
});

export const { addUser, reset } = userSlice.actions;
