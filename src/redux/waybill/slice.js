import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // waybill: [
  //   {
  //     id: 1,
  //     senior: {
  //       name: 'Майбах М.Б.',
  //       rank: 'капітан',
  //       documentNumber: 35,
  //       documantDate: new Date(),
  //       militaryUnit: 'А0000 (ПВЗ)',
  //       driver: [
  //         {
  //           rank: 'солдат',
  //           name: 'Фара.К.Л.',
  //         },
  //       ],
  //       routes: 'Кременець-Тернопіль',
  //       carSupervisor: 'Майбах М.Б.',
  //       seniorTechnician: [
  //         {
  //           rank: 'капітан',
  //           name: 'Майбах М.Б.',
  //         },
  //       ],
  //       KTP: [
  //         {
  //           rank: 'солдат',
  //           name: 'Руль В.М.',
  //         },
  //       ],
  //       purpose: '',
  //       waypoints: [
  //         {
  //           id: 4,
  //           arrival: {
  //             date: new Date(),
  //             arrivalTime: '09:30',
  //             speedometer: 12500,
  //           },
  //           departure: {
  //             date: new Date(),
  //             departureTime: '11:30',
  //             speedometer: 13000,
  //           },
  //         },
  //       ],
  //     },
  //   },
  // ],

  // expenses: [
  //   {
  //     fuelAndLubricates: '',
  //     nomenclatureCode: '',
  //     availableBeforeDeparture: '12',
  //     received: [
  //       {
  //         amount: 50,
  //         date: '29.09.23',
  //       },
  //     ],
  //     availableAmountInStock: 48,
  //     expenseLitrs: 14,
  //     belongsToNormal: 14,
  //     economy: '',
  //     overExpense: '',
  //   },
  // ],
  waybill: [],
  expenses: [],
  isLoading: false,
  error: null,
};
export const slice = createSlice({
  name: 'waybill',
  initialState,
  reducers: {
    getWaybill: (state, { payload }) => {
      state.waybill = payload;
    },
    addWaybill: (state, { payload }) => {
      state.waybill.push(payload);
    },
    removeWaybill: (state, { payload }) => {
      state.waybill = state.waybill.filter(waybill => waybill.id !== payload);
    },
    updateWaybill: (state, { payload }) => {
      state.waybill = state.waybill.map(waybill => {
        return waybill.id === payload.id ? payload : waybill;
      });
    },
  },
});

export const waybillReducer = slice.reducer;
export const { getWaybill, addWaybill, removeWaybill, updateWaybill } =
  slice.actions;
