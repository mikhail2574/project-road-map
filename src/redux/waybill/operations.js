import { createAsyncThunk } from '@reduxjs/toolkit';
import { roadApi } from 'redux/cars/operations';

export const fetchPersonnelThunk = createAsyncThunk(
  'fetchPersonnel',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await roadApi.get('/personnel');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPersonnelByIdThunk = createAsyncThunk(
  'getPersonnelById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await roadApi.get(`/personnel/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPersonnelThunk = createAsyncThunk(
  'addPersonnel',
  async (body, { rejectWithValue }) => {
    const data = {
      name: body.name,
      rank: body.rank,
      position: body.position,
    };
    try {
      const res = await roadApi.post('/personnel', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePersonnelThunk = createAsyncThunk(
  'deletePersonnel',
  async (id, { rejectWithValue }) => {
    try {
      await roadApi.delete(`/personnel/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePersonnelThunk = createAsyncThunk(
  'updatePersonnel',
  async (body, { rejectWithValue }) => {
    const newBody = {
      name: body.name,
      rank: body.rank,
      position: body.position,
    };
    try {
      const { data } = await roadApi.put(`/personnel/${body.id}`, newBody);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
