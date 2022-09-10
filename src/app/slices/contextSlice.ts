import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ContextState {
  isLoading: boolean;
}

const initialState: ContextState = {
  isLoading: false
}


export const contextSlice = createSlice({
  name: 'context',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  }
});

export const { toggle } = contextSlice.actions;

export const selectIsLoading = (state: RootState) => state.context.isLoading;

export default contextSlice.reducer;

