import { carsReducer } from './cars/slice';
import { downloadReducer } from './download/slice';
import { waybillReducer } from './waybill/slice';
import { infosReducer } from './infos/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    waybill: waybillReducer,
    cars: carsReducer,
    download: downloadReducer,
    infos: infosReducer,
  },
});
