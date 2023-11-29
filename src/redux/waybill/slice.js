import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addPersonnelThunk,
  deletePersonnelThunk,
  fetchPersonnelThunk,
  getPersonnelByIdThunk,
  updatePersonnelThunk,
} from './operations';

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
  extraReducers: builder => {
    builder
      .addCase(fetchPersonnelThunk.fulfilled, (state, { payload }) => {
        state.waybill = payload;
      })
      .addCase(getPersonnelByIdThunk.fulfilled, (state, { payload }) => {
        state.waybill = payload;
      })
      .addCase(addPersonnelThunk.fulfilled, (state, { payload }) => {
        state.waybill.push(payload);
      })
      .addCase(deletePersonnelThunk.fulfilled, (state, { payload }) => {
        state.waybill = state.waybill.filter(waybill => waybill.id !== payload);
      })
      .addCase(updatePersonnelThunk.fulfilled, (state, { payload }) => {
        state.waybill = state.waybill.map(waybill =>
          waybill.id === payload.id ? payload : waybill
        );
      })
      .addMatcher(
        isAnyOf(
          fetchPersonnelThunk.fulfilled,
          getPersonnelByIdThunk.fulfilled,
          addPersonnelThunk.fulfilled,
          deletePersonnelThunk.fulfilled,
          updatePersonnelThunk.fulfilled
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchPersonnelThunk.pending,
          getPersonnelByIdThunk.pending,
          addPersonnelThunk.pending,
          deletePersonnelThunk.pending,
          updatePersonnelThunk.pending
        ),
        (state, { payload }) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchPersonnelThunk.rejected,
          getPersonnelByIdThunk.rejected,
          addPersonnelThunk.rejected,
          deletePersonnelThunk.rejected,
          updatePersonnelThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const waybillReducer = slice.reducer;
