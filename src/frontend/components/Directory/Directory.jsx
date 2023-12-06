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
  StyledTableTdLastChild,
  StyledTableWrapper,
  StyledTitleDirectory,
} from './Directory.styled';
import { Icons } from '../Icons';
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
      carName: 'Volvo',
      sign: 'BB 1234 BB',
      fuelType: 'Бензин',
      fuelConsumption: '10',
      oilType: 'Моторна',
      oilConsumption: '1',
      exploitationGroupShort: 'А',
      exploitationGroup: 'Автомобілі',
      driver: 'Петро Петренко',
      driverRank: 'Старший сержант',
      unit: 'Відділ',
      senior: 'Іван Іваненко',
      seniorRank: 'Старший лейтенант',
    };
    dispatch(addCarsThunk(carData));
  };

  const handleEditCar = (e, sign) => {
    e.preventDefault();
    const carData = {
      carName: 'KAMAZ',
      sign: 'AA 1234 SS',
      fuelType: 'Voda z krana',
      fuelConsumption: '10',
      oilType: 'MAZUT',
      oilConsumption: '1',
      exploitationGroupShort: 'А',
      exploitationGroup: 'Автомобілі',
      driver: 'Бандера',
      driverRank: 'Старший сержант',
      unit: 'Відділ',
      senior: 'Іван Іваненко',
      seniorRank: 'Старший лейтенант',
    };
    dispatch(updateCarsThunk({ ...carData, sign }));
  };

  const handleDeleteCar = (e, sign) => {
    dispatch(deleteCarsThunk(sign));
  };
  return (
    <>
      <Icons />
      <StyledHeaderWrapper>
        <StyledTitleDirectory>Довідник</StyledTitleDirectory>
        <form onSubmit={handleAddCar}>
          <StyledAddButton>Додадти дані</StyledAddButton>
        </form>
      </StyledHeaderWrapper>
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
          </StyledTableHeaderTr>
        </StyledTableHead>
        <StyledTableBody>
          {loading && <h1>Loading...</h1>}
          {error && <h1>Щось пішло не так</h1>}
          {cars?.map(car => (
            <StyledTableBodyTr key={car.sign}>
              <StyledTableBodyTd>{car.carName}</StyledTableBodyTd>
              <StyledTableBodyTd>{car.sign}</StyledTableBodyTd>
              <StyledTableShortTd>{car.fuelType}</StyledTableShortTd>
              <StyledTableBodyTd>{car.fuelConsumption}</StyledTableBodyTd>
              <StyledTableShortTd>{car.oilType}</StyledTableShortTd>
              <StyledTableBodyTd>{car.oilConsumption}</StyledTableBodyTd>
              <StyledTableBodyTd>{car.exploitationGroup}</StyledTableBodyTd>
              <StyledTableBodyTd>{car.exploitationGroup}</StyledTableBodyTd>
              <StyledTableShortTd>{car.driver}</StyledTableShortTd>
              <StyledTableBodyTd>{car.driverRank.result}</StyledTableBodyTd>
              <StyledTableShortTd>{car.unit}</StyledTableShortTd>
              <StyledTableShortTd>{car.senior}</StyledTableShortTd>
              <StyledTableTdLastChild>
                {car.seniorRank.result}
              </StyledTableTdLastChild>
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
    </>
  );
};

export default Directory;
