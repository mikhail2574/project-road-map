import { createAsyncThunk } from '@reduxjs/toolkit';
import { roadApi } from 'redux/infos/operations';

export const downloadFileThunk = createAsyncThunk(
  'downloadFile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await roadApi.post(
        '/excel',
        {},
        { responseType: 'blob' }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
