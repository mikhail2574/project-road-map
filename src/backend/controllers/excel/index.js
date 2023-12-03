const { ctrlWrapper } = require('../../services');
const getAll = require('./getAll');
const addCar = require('./addCar');
const addPersonnel = require('./addPersonnel');
const updateCars = require('./updateCars');
const updatePersonnel = require('./updatePersonnel');

module.exports = {
  getAll: ctrlWrapper(getAll),
  addCar: ctrlWrapper(addCar),
  addPersonnel: ctrlWrapper(addPersonnel),
  updateCars: ctrlWrapper(updateCars),
  updatePersonnel: ctrlWrapper(updatePersonnel),
};
