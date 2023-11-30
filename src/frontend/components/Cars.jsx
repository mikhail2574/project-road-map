import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCarsThunk,
  deleteCarsThunk,
  fetchCarsThunk,
  updateCarsThunk,
} from 'redux/cars/operations';
import { selectCars } from 'redux/cars/selectors';
import {
  addPersonnelThunk,
  deletePersonnelThunk,
  fetchPersonnelThunk,
  updatePersonnelThunk,
} from 'redux/waybill/operations';
import { selectWaybill } from 'redux/waybill/selectors';

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const waybill = useSelector(selectWaybill);
  useEffect(() => {
    dispatch(fetchCarsThunk());
    dispatch(fetchPersonnelThunk());
  }, [dispatch]);

  // Cars
  const handleAddCarSubmit = e => {
    e.preventDefault();

    const carData = {
      carName: 'ВАЗ',
      sign: 'AA0000AB',
      fuelType: 'Дизель',
      fuelConsumption: '5',
      oilType: 'Моторна',
      oilConsumption: '2',
      exploitationGroupShort: 'А',
      exploitationGroup: 'Автомобілі',
    };
    dispatch(addCarsThunk(carData));
  };

  const handleEditCarSubmit = (e, id) => {
    e.preventDefault();
    const carData = {
      carName: 'КРАЗ',
      sign: 'AA0000AB',
      fuelType: 'Мазут',
      fuelConsumption: '5',
      oilType: 'Моторна',
      oilConsumption: '2',
      exploitationGroupShort: 'А',
      exploitationGroup: 'Автомобілі',
    };
    dispatch(updateCarsThunk({ ...carData, id }));
  };

  const handleDeleteCarSubmit = id => {
    dispatch(deleteCarsThunk(id));
  };
  // Personnel
  const handleWaybillSubmit = e => {
    e.preventDefault();

    const waybillData = {
      name: 'Орел Ф.І.',
      position: 'водій',
      rank: 'генерал',
    };
    dispatch(addPersonnelThunk(waybillData));
  };

  const handleEditWaybillSubmit = (e, id) => {
    e.preventDefault();
    const waybillData = {
      name: 'Козел Ф.І.',
      position: 'пілот',
      rank: 'генерал',
    };
    dispatch(updatePersonnelThunk({ ...waybillData, id }));
  };

  const handleDeleteWaybillSubmit = id => {
    dispatch(deletePersonnelThunk(id));
  };

  return (
    <div>
      <form onSubmit={handleAddCarSubmit}>
        <button>Add Car</button>
      </form>
      <form onSubmit={handleWaybillSubmit}>
        <button>Add Personnel</button>
      </form>
      <ul>
        {cars?.map(car => (
          <li key={car.id}>
            <p>Марка: {car.carName}</p>
            <p>Номер: {car.sign}</p>
            <p>Тип палива: {car.fuelType}</p>
            <p>Витрати палива: {car.fuelConsumption}</p>
            <p>Тип оливи: {car.oilType}</p>
            <p>Витрати оливи: {car.oilConsumption}</p>
            <p>Група експлуатації: {car.exploitationGroupShort}</p>
            <p>Група експлуатації 2: {car.exploitationGroup}</p>
            <p>Водій: Фара К.Л.</p>
            <p>Звання водія: солдат</p>
            <p>Підрозділ: А0000 (ПВЗ)</p>
            <p>Старший: Солярка К.Р.</p>
            <p>Звання старшого: лейтенант</p>
            <form onSubmit={e => handleEditCarSubmit(e, car.id)}>
              <button>Edit</button>
            </form>
            <button onClick={() => handleDeleteCarSubmit(car.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ol>
        {waybill.map(item => (
          <li key={item.id}>
            <p>Ім'я: {item.name}</p>
            <p>Звання: {item.rank}</p>
            <p>Посада: {item.position}</p>
            <form onSubmit={e => handleEditWaybillSubmit(e, item.id)}>
              <button>Edit Person</button>
            </form>
            <button onClick={() => handleDeleteWaybillSubmit(item.id)}>
              Delete Person
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Cars;
