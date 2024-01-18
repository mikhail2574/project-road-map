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
  checkPerson: {
    name: '',
    rank: '',
    position: '',
  },
  documentNumber: '',
  dutyNumber: '',
  militaryUnit: '',
  purposeStatement: '',
  car: {
    carSign: '',
    carName: '',
    fuelConsumption: '',
    fuelType: '',
    exploitationGroup: '',
    driver: {
      name: '',
      rank: '',
      position: '',
    },
  },
  formal: {
    departureTime: [],
    arrivalTime: [],
    departureDate: [],
    arrivalDate: [],
    departureKilo: [],
    arrivalKilo: [],
  },
  expenses: [],
  facts: [],
  routes: [],
  totalMileage: 0,
  totalExpense: 0,
  pmm: {
    name: [],
    code: [],
    startCount: [],
    receivedCount: [],
    receivedDate: [],
    endCount: [],
    usedCount: [],
    normCount: [],
    ecoCount: [],
    reuseCount: [],
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
    setPmm: (state, { payload }) => {
      for (let i = 0; i === 0 || i; i++) {
        if (!payload[`itemName_${i}`]) {
          return;
        }
        state.pmm.name.push(payload[`itemName_${i}`]);
        state.pmm.code.push(payload[`itemCode_${i}`]);
        state.pmm.startCount.push(payload[`availabilityBeforeDeparture_${i}`]);
        state.pmm.receivedCount.push(payload[`received_${i}`]);
        state.pmm.receivedDate.push(payload[`receivedDate_${i}`]);
        state.pmm.endCount.push(payload[`availability_${i}`]);
        state.pmm.usedCount.push(payload[`spent_${i}`]);
        state.pmm.normCount.push(payload[`norm_${i}`]);
        state.pmm.ecoCount.push(payload[`saving_${i}`]);
        state.pmm.reuseCount.push(payload[`overuse_${i}`]);
      }
    },
    setMainInfo: (state, { payload }) => {
      state.documentNumber = payload.numberDocument;
      state.car.carName = payload.carName;
      state.car.carSign = payload.sign.label;
      state.car.exploitationGroup = payload.exploitationGroup;
      state.route = payload.trafficRoute;
      state.documentDate = payload.documentDate;
      state.militaryUnit = payload.unit;
      state.car.driver = payload.driver;
      state.engineer.name = payload.seniorKtp.label;
      state.engineer.rank = payload.seniorKtpRank;
      state.supervisor.name = payload.senior.label;
      state.supervisor.rank = payload.seniorTechUnitRank;
      state.purposeStatement = payload.purposeStatement;
      for (let i = 0; i < payload.departureDate.length; i++) {
        state.formal.departureTime.push(payload.departureTime[i]);
        state.formal.arrivalTime.push(payload.arrivalTime[i]);
        state.formal.departureDate.push(payload.departureDate[i]);
        state.formal.arrivalDate.push(payload.arrivalDate[i]);
        state.formal.arrivalKilo.push(payload.speedOmeter[i]);
        state.formal.departureKilo.push(payload.speedOmeterArrival[i]);
      }
    },
  },
});

export const {
  setCarWork,
  setPersonnel,
  updateRoute,
  deleteRoute,
  setMainInfo,
  setPmm,
} = slice.actions;
export const formReducer = slice.reducer;
