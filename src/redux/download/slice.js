import { createSlice } from '@reduxjs/toolkit';
import { downloadFileThunk } from './operations';

const initialState = {
  isDownloading: false,
  error: null,
};
export const slice = createSlice({
  name: 'download',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(downloadFileThunk.fulfilled, (state, action) => {
        state.isDownloading = false;
        state.error = null;
      })
      .addCase(downloadFileThunk.pending, (state, action) => {
        state.isDownloading = true;
        state.error = null;
      })
      .addCase(downloadFileThunk.rejected, (state, action) => {
        state.isDownloading = false;
        state.error = action.payload;
      });
  },
});

export const downloadReducer = slice.reducer;
