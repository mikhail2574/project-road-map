import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const roadApi = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCarsThunk = createAsyncThunk(
  'fetchCars',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await roadApi.get('/cars');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCarsByIdThunk = createAsyncThunk(
  'getCarsById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await roadApi.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addCarsThunk = createAsyncThunk(
  'addCars',
  async (body, { rejectWithValue }) => {
    const data = {
      carName: body.carName,
      sign: body.sign,
      fuelType: body.fuelType,
      fuelConsumption: body.fuelConsumption,
      oilType: body.oilType,
      oilConsumption: body.oilConsumption,
      exploitationGroup: body.exploitationGroup,
    };
    try {
      const res = await roadApi.post('/cars', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCarsThunk = createAsyncThunk(
  'deleteCars',
  async (id, { rejectWithValue }) => {
    try {
      await roadApi.delete(`/cars/${id}`);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateCarsThunk = createAsyncThunk(
  'updateCars',
  async (body, { rejectWithValue }) => {
    const newBody = {
      carName: body.carName,
      sign: body.sign,
      fuelType: body.fuelType,
      fuelConsumption: body.fuelConsumption,
      oilType: body.oilType,
      oilConsumption: body.oilConsumption,
      exploitationGroup: body.exploitationGroup,
    };
    try {
      const { data } = await roadApi.put(`/cars/${body.id}`, newBody);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
