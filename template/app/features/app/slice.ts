import { createSlice } from '@reduxjs/toolkit';
import { AppTypes } from './types';

const initialState: AppTypes = {
  initialScreen: 'Auth',
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {},
});

export const appReducer = appSlice.reducer;
