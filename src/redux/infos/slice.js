import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addCarsThunk,
  addPersonnelThunk,
  addRoadTypesThunk,
  addRoutesThunk,
  deleteCarsThunk,
  deletePersonnelThunk,
  deleteRoadTypesThunk,
  deleteRoutesThunk,
  fetchInfosThunk,
  updateCarsThunk,
  updatePersonnelThunk,
  updateRoadTypesThunk,
  updateRoutesThunk,
} from './operations';

const initialState = {
  cars: [],
  personnel: [],
  roadType: [],
  routes: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'infos',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchInfosThunk.fulfilled, (state, { payload }) => {
        state.cars = payload.cars;
        state.personnel = payload.personnel;
        state.roadType = payload.roadType;
        state.routes = payload.routes;
      })
      .addCase(addCarsThunk.fulfilled, (state, { payload }) => {
        state.cars.push(payload);
      })
      .addCase(deleteCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = state.cars.filter(car => car.sign !== payload.sign);
      })
      .addCase(updateCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = state.cars.map(car =>
          car.sign === payload.sign ? payload : car
        );
      })
      .addCase(addPersonnelThunk.fulfilled, (state, { payload }) => {
        state.personnel.push(payload);
      })
      .addCase(deletePersonnelThunk.fulfilled, (state, { payload }) => {
        state.personnel = state.personnel.filter(
          personnel => personnel.name !== payload.name
        );
      })
      .addCase(updatePersonnelThunk.fulfilled, (state, { payload }) => {
        state.personnel = state.personnel.map(item =>
          item.name === payload.name ? payload : item
        );
      })
      .addCase(addRoadTypesThunk.fulfilled, (state, { payload }) => {
        state.roadType.push(payload);
      })
      .addCase(updateRoadTypesThunk.fulfilled, (state, { payload }) => {
        state.roadType = state.roadType.map(item =>
          item.id === payload.id ? payload : item
        );
      })
      .addCase(deleteRoadTypesThunk.fulfilled, (state, { payload }) => {
        state.roadType = state.roadType.filter(item => item.id !== payload);
      })
      .addCase(addRoutesThunk.fulfilled, (state, { payload }) => {
        state.routes.push(payload);
      })
      .addCase(updateRoutesThunk.fulfilled, (state, { payload }) => {
        state.routes = state.routes.map(item =>
          item.id === payload.id ? payload : item
        );
      })
      .addCase(deleteRoutesThunk.fulfilled, (state, { payload }) => {
        state.routes = state.routes.filter(item => item.id !== payload);
      })
      .addMatcher(
        isAnyOf(
          addCarsThunk.fulfilled,
          deleteCarsThunk.fulfilled,
          updateCarsThunk.fulfilled,
          addPersonnelThunk.fulfilled,
          deletePersonnelThunk.fulfilled,
          updatePersonnelThunk.fulfilled,
          addRoadTypesThunk.fulfilled,
          updateRoadTypesThunk.fulfilled,
          deleteRoadTypesThunk.fulfilled,
          addRoutesThunk.fulfilled,
          updateRoutesThunk.fulfilled,
          deleteRoutesThunk.fulfilled
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addCarsThunk.pending,
          deleteCarsThunk.pending,
          updateCarsThunk.pending,
          addPersonnelThunk.pending,
          deletePersonnelThunk.pending,
          updatePersonnelThunk.pending,
          addRoadTypesThunk.pending,
          updateRoadTypesThunk.pending,
          deleteRoadTypesThunk.pending,
          addRoutesThunk.pending,
          updateRoutesThunk.pending,
          deleteRoutesThunk.pending
        ),
        (state, { payload }) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addCarsThunk.rejected,
          deleteCarsThunk.rejected,
          updateCarsThunk.rejected,
          addPersonnelThunk.rejected,
          deletePersonnelThunk.rejected,
          updatePersonnelThunk.rejected,
          addRoadTypesThunk.rejected,
          updateRoadTypesThunk.rejected,
          deleteRoadTypesThunk.rejected,
          addRoutesThunk.rejected,
          updateRoutesThunk.rejected,
          deleteRoutesThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const infosReducer = slice.reducer;
