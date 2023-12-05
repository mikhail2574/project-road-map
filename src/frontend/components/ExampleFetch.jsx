import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCarsThunk,
  addPersonnelThunk,
  fetchInfosThunk,
  updateCarsThunk,
  updatePersonnelThunk,
} from 'redux/infos/operations';
import {
  selectCars,
  selectPersonnel,
  selectRoadType,
  selectRoutes,
} from 'redux/infos/selectors';

const ExampleFetch = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const personnel = useSelector(selectPersonnel);
  const roadType = useSelector(selectRoadType);
  console.log(roadType);
  const routes = useSelector(selectRoutes);
  console.log(routes);

  useEffect(() => {
    dispatch(fetchInfosThunk());
  }, [dispatch]);

  // Cars
  const handleAddCarSubmit = e => {
    e.preventDefault();

    const carData = {
      carName: 'Audi',
      sign: 'AA 1234 AA',
      fuelType: 'Бензин',
      fuelConsumption: '10',
      oilType: 'Моторна',
      oilConsumption: '1',
      exploitationGroupShort: 'А',
      exploitationGroup: 'Автомобілі',
      driver: 'Петро Петренко',
      driverRank: {
        id: 1,
        result: 'Старший сержант',
      },
      unit: 'Відділ',
      senior: 'Іван Іваненко',
      seniorRank: {
        id: 2,
        result: 'Старший лейтенант',
      },
    };
    dispatch(addCarsThunk(carData));
  };

  const handleEditCarSubmit = (e, sign) => {
    e.preventDefault();
    const carData = {
      carName: 'KAMAZ',
      sign: 'AA 1234 SS',
      fuelType: 'Бензин',
      fuelConsumption: '10',
      oilType: 'MAZUT',
      oilConsumption: '1',
      exploitationGroupShort: 'А',
      exploitationGroup: 'Автомобілі',
      driver: 'Бандера',
      driverRank: {
        id: 1,
        result: 'Старший сержант',
      },
      unit: 'Відділ',
      senior: 'Іван Іваненко',
      seniorRank: {
        id: 2,
        result: 'Старший лейтенант',
      },
    };
    dispatch(updateCarsThunk({ ...carData, sign }));
  };

  // Personnel
  const handleAddPersonnelSubmit = e => {
    e.preventDefault();

    const personnelData = {
      name: 'Бетмен Ф.І.',
      position: 'супергерой',
      rank: 'генерал',
    };
    dispatch(addPersonnelThunk(personnelData));
  };

  const handleEditPersonnelSubmit = (e, name) => {
    e.preventDefault();
    const personnelData = {
      name: 'Бетмен Ф.І.',
      position: 'superhero',
      rank: 'літаюча миша',
    };
    dispatch(updatePersonnelThunk({ ...personnelData, name }));
  };
  return (
    <>
      <ul>
        <h2>Машини</h2>
        <form onSubmit={handleAddCarSubmit}>
          <button>Add car</button>
        </form>
        {cars?.map(car => (
          <li key={car.sign}>
            <p>Марка: {car.carName}</p>
            <p>Номер: {car.sign}</p>
            <p>Тип палива: {car.fuelType}</p>
            <p>Витрати палива: {car.fuelConsumption}</p>
            <p>Тип оливи: {car.oilType}</p>
            <p>Витрати оливи: {car.oilConsumption}</p>
            <p>Група експлуатації: {car.exploitationGroupShort}</p>
            <p>Група експлуатації 2: {car.exploitationGroup}</p>
            <p>Водій: {car.driver}</p>
            <p>Звання водія:{car.driverRank.result}</p>
            <p>Підрозділ: {car.unit}</p>
            <p>Старший: {car.senior}</p>
            <p>Звання старшого:{car.seniorRank.result} </p>
            <form onSubmit={e => handleEditCarSubmit(e, car.sign)}>
              <button>Edit car</button>
            </form>
            <button>Delete car</button>

            <hr />
          </li>
        ))}
      </ul>
      <ul>
        <h2>Люди</h2>
        <form onSubmit={handleAddPersonnelSubmit}>
          <button>Add personnel</button>
        </form>
        {personnel?.map(person => (
          <li key={person.name}>
            <p>ПІБ: {person.name}</p>
            <p>Звання: {person.rank}</p>
            <p>Посада: {person.position}</p>
            <form onSubmit={e => handleEditPersonnelSubmit(e, person.name)}>
              <button>Edit personnel</button>
            </form>
            <button>Delete personnel</button>
            <hr />
          </li>
        ))}
      </ul>
      <ul>
        <h2>Поправка</h2>

        {roadType?.map(type => (
          <li key={type.correction}>
            <p>Назва: {type.roadType}</p>
            <p>Коррекція: {type.correction}</p>

            <hr />
          </li>
        ))}
      </ul>
      <ul>
        <h2>Маршрути</h2>
        {routes?.map(route => (
          <li>
            <p>Відбуття: {route.from}</p>
            <p>Маршрут: {route.route.result}</p>
            <p>Прибуття: {route.to}</p>
            <p>Повернення: {route.return ? route.return : 'ні'}</p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExampleFetch;
