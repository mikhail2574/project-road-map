import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCarsThunk,
  deleteCarsThunk,
  fetchInfosThunk,
  updateCarsThunk,
} from 'redux/infos/operations';
import {
  selectCars,
  selectError,
  selectIsLoading,
} from 'redux/infos/selectors';
import {
  StyledAddButton,
  StyledButtonWrapper,
  StyledHeaderWrapper,
  StyledTableBody,
  StyledTableBodyTd,
  StyledTableBodyTr,
  StyledTableDeleteButton,
  StyledTableEditButton,
  StyledTableHead,
  StyledTableHeaderTh,
  StyledTableHeaderTr,
  StyledTableShortTd,
  StyledTableWrapper,
  StyledTitleDirectory,
  StyledTableTdLastChild,
} from './Directory.styled';
import { Icon } from '../Icon';

const Directory = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfosThunk());
  }, [dispatch]);

  const handleAddCar = e => {
    e.preventDefault();

    const carData = {
      carName: 'жигуль',
      sign: 'BB1234ЗK',
      fuelType: 'ДТ',
      fuelConsumption: '10',
      oilType: 'Моторна',
      oilConsumption: '1',
      exploitationGroupShort: 'Тр',
      exploitationGroup: 'Транспортна',
      driver: 'Петро П.І.',
      driverRank: 'Старший сержант',
      unit: 'Відділ',
      senior: 'Іван І.І.',
      seniorRank: 'Старший лейтенант',
    };
    dispatch(addCarsThunk(carData));
  };

  const handleEditCar = (e, sign) => {
    e.preventDefault();
    const carData = {
      carName: 'жигуль',
      sign: 'BB1234ЙЦ',
      fuelType: 'Дизель',
      fuelConsumption: '10',
      oilType: 'MAZUT',
      oilConsumption: '1',
      exploitationGroupShort: 'Тр',
      exploitationGroup: 'Транспортна',
      driver: 'Бандера Ш.І.',
      driverRank: 'Старший сержант',
      unit: 'Відділ',
      senior: 'Іван І.І.',
      seniorRank: 'Старший лейтенант',
    };
    dispatch(updateCarsThunk({ ...carData, sign }));
  };

  const handleDeleteCar = (e, sign) => {
    dispatch(deleteCarsThunk(sign));
  };
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <p>Щось пішло не так</p>}
      <StyledHeaderWrapper>
        <StyledTitleDirectory>Довідник</StyledTitleDirectory>
        <form onSubmit={handleAddCar}>
          <StyledAddButton>Додадти дані</StyledAddButton>
        </form>
      </StyledHeaderWrapper>
      {/* <StyledTableScrollWrapper> */}
      <StyledTableWrapper>
        <StyledTableHead>
          <StyledTableHeaderTr>
            <StyledTableHeaderTh>Назва автомобіля</StyledTableHeaderTh>
            <StyledTableHeaderTh>Номерний знак</StyledTableHeaderTh>
            <StyledTableHeaderTh>Тип палива</StyledTableHeaderTh>
            <StyledTableHeaderTh>Розхід палива на 100 км</StyledTableHeaderTh>
            <StyledTableHeaderTh>Тип мастила</StyledTableHeaderTh>
            <StyledTableHeaderTh>Розхід оливи</StyledTableHeaderTh>
            <StyledTableHeaderTh>Група експлуатації</StyledTableHeaderTh>
            <StyledTableHeaderTh>Група експлуатації 2</StyledTableHeaderTh>
            <StyledTableHeaderTh>Водій</StyledTableHeaderTh>
            <StyledTableHeaderTh>Звання водія</StyledTableHeaderTh>
            <StyledTableHeaderTh>Підозріл</StyledTableHeaderTh>
            <StyledTableHeaderTh>Старший</StyledTableHeaderTh>
            <StyledTableHeaderTh>Звання старшого</StyledTableHeaderTh>
            <StyledTableHeaderTh></StyledTableHeaderTh>
          </StyledTableHeaderTr>
        </StyledTableHead>
        <StyledTableBody>
          {cars?.map(car => (
            <StyledTableBodyTr key={car.sign}>
              <StyledTableBodyTd>{car.carName}</StyledTableBodyTd>
              <StyledTableBodyTd>{car.sign}</StyledTableBodyTd>
              <StyledTableShortTd>{car.fuelType}</StyledTableShortTd>
              <StyledTableBodyTd>{car.fuelConsumption}</StyledTableBodyTd>
              <StyledTableShortTd>{car.oilType}</StyledTableShortTd>
              <StyledTableBodyTd>{car.oilConsumption}</StyledTableBodyTd>
              <StyledTableBodyTd>{car.exploitationGroup}</StyledTableBodyTd>
              <StyledTableBodyTd>
                {car.exploitationGroupShort}
              </StyledTableBodyTd>
              <StyledTableShortTd>{car.driver}</StyledTableShortTd>
              <StyledTableShortTd>{car.driverRank}</StyledTableShortTd>
              <StyledTableShortTd>{car.unit}</StyledTableShortTd>
              <StyledTableShortTd>{car.senior}</StyledTableShortTd>
              <StyledTableShortTd>{car.seniorRank}</StyledTableShortTd>
              <StyledTableBodyTd>
                <StyledButtonWrapper>
                  <StyledTableEditButton
                    onClick={e => handleEditCar(e, car.sign)}
                  >
                    <Icon name="edit" size={16} />
                  </StyledTableEditButton>
                  <StyledTableDeleteButton
                    onClick={e => handleDeleteCar(e, car.sign)}
                  >
                    <Icon name="trash" size={16} />
                  </StyledTableDeleteButton>
                </StyledButtonWrapper>
              </StyledTableBodyTd>
            </StyledTableBodyTr>
          ))}
        </StyledTableBody>
      </StyledTableWrapper>
      {/* </StyledTableScrollWrapper> */}
    </>
  );
};

export default Directory;
