import { createSlice } from '@reduxjs/toolkit';

// * expenses array object type
// {
//       name: 'Масло',
//       amountBefore: 10,
//       amountDuring: 5,
//       expense: 5,
//       byNorm: 5,
//       economy: 0,
//       overExpense: 0,
//       code: 24,
//       got: 5,
//       date: '29.09.2023',
// },
// facts array object type {
//       departure: { time: '1 29.09.2023', odometer: 12337 },
//       arrival: { time: '2 29.09.2023', odometer: 12338 },
//     },
// routes array object type  👌👌
// {
//   from: 'Київ',
//   to: 'Вінниця',
//   return: 'ні',
//   depTime: '7:30, 29.00.23',
//   arrTime: '18:10, 29.00.23',
//   mileage: {
//     withCargo: 10,
//     withoutCargo: 10,
//     total: 20,
//     withTrailer: '',
//     withTug: '',
//   },
//  motorHours: { onStay: 10, onMove: 50, sum: 60 },
//  work: { nameCargo: 'Пісок', weight: 15 },
//  odometer: 12354,
// },
const initialState = {
  supervisor: {
    name: '',
    rank: '',
    position: '',
  },
  engineer: {
    name: '',
    rank: '',
    position: '',
  },
  route: '',
  documentDate: '',
  expireDate: '',
  checkedDate: '',
  documentNumber: '',
  dutyNumber: '',
  militaryUnit: '',
  car: {
    carSign: '',
    carName: '',
    fuelConsumption: '15',
    fuelType: 'ДТ',
    exploitationGroup: '',
    driver: {
      name: '',
      rank: '',
      position: '',
    },
  },
  formal: {
    departureTime: '',
    arrivalTime: '',
  },
  expenses: [],
  facts: [],
  routes: [],
  totalMileage: 0,
  totalExpense: 0,
  checkPerson: {
    name: '',
    rank: '',
    position: '',
  },
};

export const slice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCarWork: (state, { payload }) => {
      if (payload.route) {
        state.routes.push(payload.route);
      }
      state.totalMileage = payload.totalMileage;
      state.totalExpense = payload.totalExpense;
    },
    updateRoute: (state, { payload }) => {
      state.routes = state.routes.map(route =>
        route.id === payload.id ? payload : route
      );
    },
    deleteRoute: (state, { payload }) => {
      state.routes = state.routes.filter(route => route.id !== payload);
    },
    setPersonnel: (state, { payload }) => {
      state.car.driver = payload.driver;
      state.checkPerson = payload.checkPerson;
    },
  },
});

export const { setCarWork, setPersonnel, updateRoute, deleteRoute } =
  slice.actions;
export const formReducer = slice.reducer;
