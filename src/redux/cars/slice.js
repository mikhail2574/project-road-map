import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
  // cars: [
  //   {
  //     id: '1',
  //     carMake: 'Бетмобіль',
  //     carPlate: 'BB4535OO',
  //     fuelType: 'ДТ',
  //     fuelExpenses: '11.5',
  //     oilType: 'Олива 30 w40',
  //     oilExpenses: '1.2',
  //     groupExploitation: 'Транспортна',
  //     groupExploitation2: 'Транспортна',
  //     driver: 'Фара К.Л.',
  //     driverRank: 'Солдат',
  //     subDivision: 'А0000 (ПВЗ)',
  //     senior: 'Майбах К.Р',
  //     seniorRank: 'Капітан',
  //   },
  //   {
  //     id: '2',
  //     carMake: 'Бетмобіль',
  //     carPlate: 'BB4535OO',
  //     fuelType: 'ДТ',
  //     fuelExpenses: '11.5',
  //     oilType: 'Олива 30 w40',
  //     oilExpenses: '1.2',
  //     groupExploitation: 'Транспортна',
  //     groupExploitation2: 'Транспортна',
  //     driver: 'Фара К.Л.',
  //     driverRank: 'Солдат',
  //     subDivision: 'А0000 (ПВЗ)',
  //     senior: 'Майбах К.Р',
  //     seniorRank: 'Капітан',
  //   },
  // ],
  cars: [],
  isLoading: false,
  error: null,
};
export const slice = createSlice({
  name: 'cars',
  initialState,
  // reducers: {
  //   getCars: (state, { payload }) => {
  //     state.cars = payload;
  //   },
  //   addCar: (state, { payload }) => {
  //     state.cars.push(payload);
  //   },
  //   removeCar: (state, { payload }) => {
  //     state.cars = state.cars.filter(car => car.id !== payload);
  //   },
  //   updateCar: (state, { payload }) => {
  //     state.cars = state.cars.map(car => {
  //       return car.id === payload.id ? payload : car;
  //     });
  //   },
  //   setLoading: (state, { payload }) => {
  //     state.isLoading = payload;
  //   },
  //   setError: (state, { payload }) => {
  //     state.error = payload;
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
      // state.cars = [...state.cars, ...payload];
      state.cars = payload;
    });
  },
});

export const carsReducer = slice.reducer;
// export const { getCars, addCar, removeCar, updateCar } = slice.actions;
