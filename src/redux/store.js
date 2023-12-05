import { downloadReducer } from './download/slice';
import { infosReducer } from './infos/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    download: downloadReducer,
    infos: infosReducer,
  },
});
