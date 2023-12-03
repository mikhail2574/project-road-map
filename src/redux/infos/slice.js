import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addCarsThunk,
  addRoadTypesThunk,
  addRoutesThunk,
  deleteCarsThunk,
  deleteRoadTypesThunk,
  deleteRoutesThunk,
  fetchInfosThunk,
  updateCarsThunk,
  updateRoadTypesThunk,
  updateRoutesThunk,
} from './operations';
import {
  addPersonnelThunk,
  deletePersonnelThunk,
  fetchPersonnelThunk,
  getPersonnelByIdThunk,
  updatePersonnelThunk,
} from 'redux/waybill/operations';

const initialState = {
  cars: [
    {
      carName: 'жигуль',
      sign: 'аа2245аа',
      fuelType: 'Бензин',
      fuelConsumption: 7,
      oilType: 'Олива 10 w40',
      oilConsumption: 1,
      exploitationGroupShort: 'тр',
      exploitationGroup: 'транспортна',
      driver: 'Фара К.Л.',
      driverRank: {
        formula:
          'IFERROR(INDEX(Таблиця3[звання],MATCH(auto[[#This Row],[Водій]],Таблиця3[ПІБ],0)),"")',
        result: 'солдат',
      },
      unit: 'А0000 (ПВЗ)',
      senior: 'Солярка К.Р.',
      seniorRank: {
        formula:
          'IFERROR(INDEX(Таблиця3[звання],MATCH(auto[[#This Row],[Старший]],Таблиця3[ПІБ],0)),"")',
        result: 'лейтенант',
      },
    },
  ],
  personnel: [
    {
      position: 'Начальник автомобільної служби',
      rank: 'капітан',
      rankShort: 'к-н',
      name: 'Майбах М.Б.',
    },
    {
      position: 'начальник КТП',
      rank: 'солдат',
      rankShort: 'солд',
      name: 'Руль В.М.',
    },
    {
      position: 'технік',
      rank: 'лейтенант',
      rankShort: 'л-т',
      name: 'Солярка К.Р.',
    },
  ],
  roadType: [
    {
      roadType: 'Рух по дорозі з покращеним покриттям',
      correction: 0.15,
    },
  ],
  routes: [
    {
      from: 'Кременець',
      to: 'Тернопіль',
      return: 'так',
      route: {
        formula:
          'IF(Таблиця4[[#This Row],[в один кінець]]="так",Таблиця4[[#This Row],[Звідки]]&" - "&Таблиця4[[#This Row],[Куди]],Таблиця4[[#This Row],[Звідки]]&" - "&Таблиця4[[#This Row],[Куди]]&" - "&Таблиця4[[#This Row],[Звідки]])',
        result: 'Кременець - Тернопіль',
      },
    },
  ],
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
        state.cars = state.cars.filter(car => car.id !== payload);
      })
      .addCase(updateCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = state.cars.map(car =>
          car.id === payload.id ? payload : car
        );
      })
      .addCase(addPersonnelThunk.fulfilled, (state, { payload }) => {
        state.personnel.push(payload);
      })
      .addCase(deletePersonnelThunk.fulfilled, (state, { payload }) => {
        state.personnel = state.personnel.filter(
          personnel => personnel.id !== payload
        );
      })
      .addCase(updatePersonnelThunk.fulfilled, (state, { payload }) => {
        state.personnel = state.personnel.map(item =>
          item.id === payload.id ? payload : item
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
          fetchPersonnelThunk.fulfilled,
          getPersonnelByIdThunk.fulfilled,
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
          fetchPersonnelThunk.pending,
          getPersonnelByIdThunk.pending,
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
          fetchPersonnelThunk.rejected,
          getPersonnelByIdThunk.rejected,
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
