import React from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/selectors';
import { selectWaybill } from 'redux/waybill/selectors';

const Cars = () => {
  const cars = useSelector(selectCars);
  const waybill = useSelector(selectWaybill);
  return (
    <>
      <ul>
        {cars?.map(car => (
          <li key={car.id}>
            <p>Марка: {car.carMake}</p>
            <p>Номер: {car.carPlate}</p>
            <p>Тип палива: {car.fuelType}</p>
            <p>Витрати палива: {car.fuelExpenses}</p>
            <p>Тип оливи: {car.oilType}</p>
            <p>Витрати оливи: {car.oilExpenses}</p>
            <p>Група експлуатації: {car.groupExploitation}</p>
            <p>Група експлуатації 2: {car.groupExploitation2}</p>
            <p>Водій: {car.driver}</p>
            <p>Звання водія: {car.driverRank}</p>
            <p>Підрозділ: {car.subdivision}</p>
            <p>Старший: {car.senior}</p>
            <p>Звання старшого: {car.seniorRank}</p>
          </li>
        ))}
      </ul>
      <ul>
        {waybill?.map(item => (
          <li key={item.id}>
            <p>Номер: {item.id}</p>
            <p>Назва: {item.senior.name}</p>
            <p>Звання: {item.senior.rank}</p>
            <p>Номер документу: {item.senior.documentNumber}</p>
            <p>
              {' '}
              Дата документу: {item.senior.documantDate.toLocaleDateString()}
            </p>
            <p>Військова частина: {item.senior.militaryUnit}</p>
            <p>Водій: {item.senior.driver.name}</p>
            <p>Звання водія: {item.senior.driver.rank}</p>
            <p>Маршрут: {item.senior.routes}</p>
            <p>Керівник автомобіля: {item.senior.carSupervisor}</p>
            <p>
              Старший технік:{' '}
              {item.senior.seniorTechnician.map(item => (
                <span>{item.name}</span>
              ))}
            </p>
            <p>
              КТП:{' '}
              {item.senior.KTP.map(item => (
                <span>{item.name}</span>
              ))}
            </p>
            <p>Призначення: {item.senior.purpose}</p>
            <ul>
              Пункти:{' '}
              {item.senior.waypoints.map(item => (
                <li key={item.id}>
                  <p>Прибуття: {item.arrival.date.toLocaleDateString()}</p>
                  <p>Час прибуття: {item.arrival.arrivalTime}</p>
                  <p>Показник спідометра: {item.arrival.speedometer}</p>
                  <p>
                    Відправлення: {item.departure.date.toLocaleDateString()}
                  </p>
                  <p>Час відправлення: {item.departure.departureTime}</p>
                  <p>Показник спідометра: {item.departure.speedometer}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cars;