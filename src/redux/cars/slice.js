import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addCarsThunk,
  deleteCarsThunk,
  fetchCarsThunk,
  getCarsByIdThunk,
  updateCarsThunk,
} from './operations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};
export const slice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addCase(getCarsByIdThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addCase(addCarsThunk.fulfilled, (state, { payload }) => {
        state.cars.push(payload);
      })
      .addCase(deleteCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = state.cars.filter(car => car.id !== payload);
      })
      .addCase(updateCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = state.cars.map(car =>
          car.id === payload.id ? payload : car
        );
      })
      .addMatcher(
        isAnyOf(
          fetchCarsThunk.fulfilled,
          getCarsByIdThunk.fulfilled,
          addCarsThunk.fulfilled,
          deleteCarsThunk.fulfilled,
          updateCarsThunk.fulfilled
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchCarsThunk.pending,
          getCarsByIdThunk.pending,
          addCarsThunk.pending,
          deleteCarsThunk.pending,
          updateCarsThunk.pending
        ),
        (state, { payload }) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchCarsThunk.rejected,
          getCarsByIdThunk.rejected,
          addCarsThunk.rejected,
          deleteCarsThunk.rejected,
          updateCarsThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const carsReducer = slice.reducer;
