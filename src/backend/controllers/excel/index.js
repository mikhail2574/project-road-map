const { ctrlWrapper } = require('../../services');
const getAll = require('./getAll');
const addCar = require('./addCar');
const addPersonnel = require('./addPersonnel');

module.exports = {
  getAll: ctrlWrapper(getAll),
  addCar: ctrlWrapper(addCar),
  addPersonnel: ctrlWrapper(addPersonnel),
};
