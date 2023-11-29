const ctrlWrapper = require('../../services/ctrlWrapper');
const getAllCars = require('./getAll');
const getById = require('./getById');
const removeCar = require('./remove');
const add = require('./add');
const update = require('./update');

module.exports = {
  getAllCars: ctrlWrapper(getAllCars),
  getById: ctrlWrapper(getById),
  remove: ctrlWrapper(removeCar),
  add: ctrlWrapper(add),
  update: ctrlWrapper(update),
};
