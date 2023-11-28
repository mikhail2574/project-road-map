import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [
    {
      id: '1',
      carMake: 'Бетмобіль',
      carPlate: 'BB4535OO',
      fuelType: 'ДТ',
      fuelExpenses: '11.5',
      oilType: 'Олива 30 w40',
      oilExpenses: '1.2',
      groupExploitation: 'Транспортна',
      groupExploitation2: 'Транспортна',
      driver: 'Фара К.Л.',
      driverRank: 'Солдат',
      subdivision: 'А0000 (ПВЗ)',
      senior: 'Майбах К.Р',
      seniorRank: 'Капітан',
    },
  ],
  isLoading: false,
  error: null,
};
export const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
});

export const carsReducer = slice.reducers;
// export { } = slice.actions;
