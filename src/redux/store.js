import { carsReducer } from './cars/slice';
import { waybillReducer } from './waybill/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    waybill: waybillReducer,
    cars: carsReducer,
  },
});
