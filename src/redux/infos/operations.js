import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const roadApi = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchInfosThunk = createAsyncThunk(
  'fetchInfos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await roadApi.get('/infos');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Cars

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
      exploitationGroupShort: body.exploitationGroupShort,
      driver: body.driver,
      driverRank: body.driverRank.result,
      unit: body.unit,
      senior: body.senior,
      seniorRank: body.seniorRank.result,
    };
    try {
      const res = await roadApi.post('/infos/cars', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCarsThunk = createAsyncThunk(
  'deleteCars',
  async (sign, { rejectWithValue }) => {
    try {
      await roadApi.delete(`/infos/cars/${sign}`);
      return sign;
    } catch (error) {
      return rejectWithValue(error.message);
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
      exploitationGroupShort: body.exploitationGroupShort,
      driver: body.driver,
      driverRank: body.driverRank.result,
      unit: body.unit,
      senior: body.senior,
      seniorRank: body.seniorRank.result,
    };
    try {
      const { data } = await roadApi.put(`/infos/cars/${body.sign}`, newBody);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Personnel

export const addPersonnelThunk = createAsyncThunk(
  'addPersonnel',
  async (body, { rejectWithValue }) => {
    const data = {
      name: body.name,
      rank: body.rank,
      position: body.position,
    };
    try {
      const res = await roadApi.post('/infos/personnel', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePersonnelThunk = createAsyncThunk(
  'deletePersonnel',
  async (name, { rejectWithValue }) => {
    try {
      await roadApi.delete(`/infos/personnel/${name}`);
      return name;
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
      const { data } = await roadApi.put(
        `/infos/personnel/${body.name}`,
        newBody
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Road Types

export const addRoadTypesThunk = createAsyncThunk(
  'fetchRoadTypes',
  async (body, { rejectWithValue }) => {
    const data = {
      roadType: body.roadType,
      correction: body.correction,
    };
    try {
      const res = await roadApi.post('/infos/roadTypes', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateRoadTypesThunk = createAsyncThunk(
  'updateRoadTypes',
  async (body, { rejectWithValue }) => {
    const newBody = {
      roadType: body.roadType,
      correction: body.correction,
    };
    try {
      const res = await roadApi.put(
        `/infos/roadTypes/${body.roadType}`,
        newBody
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteRoadTypesThunk = createAsyncThunk(
  'deleteRoadTypes',
  async (id, { rejectWithValue }) => {
    try {
      await roadApi.delete(`/infos/roadTypes/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Routes

export const addRoutesThunk = createAsyncThunk(
  'addRoutes',
  async (body, { rejectWithValue }) => {
    const data = {
      from: body.from,
      to: body.to,
      return: body.return,
      route: {
        formula: body.formula,
        result: body.result,
      },
    };
    try {
      const res = await roadApi.post('/infos/routes', data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateRoutesThunk = createAsyncThunk(
  'updateRoutes',
  async (body, { rejectWithValue }) => {
    const newBody = {
      from: body.from,
      to: body.to,
      return: body.return,
      route: {
        formula: body.formula,
        result: body.result,
      },
    };
    try {
      const res = await roadApi.put(`/infos/routes/${body.id}`, newBody);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteRoutesThunk = createAsyncThunk(
  'deleteRoutes',
  async (id, { rejectWithValue }) => {
    try {
      await roadApi.delete(`/infos/routes/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
