const fs = require('fs/promises'),
  path = require('path'),
  { ctrlWrapper, requestError } = require('../../services'),
  { nanoid } = require('nanoid');

const personnelPath = path.join(__dirname, '../../db/personnel.json');
const carsPath = path.join(__dirname, '../../db/cars.json');

const updatePersonnel = async newPersonnel => {
  await fs.writeFile(personnelPath, JSON.stringify(newPersonnel, null, 2));
};

const updateCars = async newCars => {
  await fs.writeFile(carsPath, JSON.stringify(newCars, null, 2));
};

const getPersonnel = async () => {
  const data = await fs.readFile(personnelPath, 'utf-8');
  return JSON.parse(data);
};
const getCars = async () => {
  const data = await fs.readFile(carsPath, 'utf-8');
  return JSON.parse(data);
};

const getPersonnelById = async id => {
  const personnel = await getPersonnel();
  const person = personnel.find(item => item.id === id);
  if (!person) {
    throw requestError(404, 'Not found');
  }
  return person;
};

const getCarById = async id => {
  const cars = await getCars();
  const car = cars.find(item => item.id === id);
  if (!car) {
    throw requestError(404, 'Not found');
  }
  return car;
};

const addPerson = async body => {
  const personnel = await getPersonnel();
  const newPerson = { id: nanoid(), ...body };
  const newPersonnel = [...personnel, newPerson];
  await updatePersonnel(newPersonnel);
  return newPerson;
};

const addCar = async body => {
  const cars = await getCars();
  const newCar = { id: nanoid(), ...body };
  const newCars = [...cars, newCar];
  await updateCars(newCars);
  return newCar;
};

const updatePerson = async (id, body) => {
  const personnel = await getPersonnel();
  const personIndex = personnel.findIndex(item => item.id === id);
  if (personIndex === -1) {
    throw requestError(404, 'Not found');
  }
  const updatedPerson = { ...personnel[personIndex], ...body };
  personnel.slice(personIndex, 1, updatedPerson);
  await updatePersonnel(personnel);
  return updatedPerson;
};

const updateCar = async (id, body) => {
  const cars = await getCars();
  const carIndex = cars.findIndex(item => item.id === id);
  if (carIndex === -1) {
    throw requestError(404, 'Not found');
  }
  const updatedCar = { ...cars[carIndex], ...body };
  cars.slice(carIndex, 1, updatedCar);
  await updateCars(cars);
  return updatedCar;
};

const deletePerson = async id => {
  const personnel = await getPersonnel();
  const personIndex = personnel.findIndex(item => item.id === id);
  if (personIndex === -1) {
    throw requestError(404, 'Not found');
  }
  personnel.splice(personIndex, 1);
  await updatePersonnel(personnel);
};

const deleteCar = async id => {
  const cars = await getCars();
  const carIndex = cars.findIndex(item => item.id === id);
  if (carIndex === -1) {
    throw requestError(404, 'Not found');
  }
  cars.splice(carIndex, 1);
  await updateCars(cars);
};

module.exports = {
  getPersonnel,
  getPersonnelById,
  addPerson,
  updatePerson,
  deletePerson,
  getCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
};
