const ctrlWrapper = require('../../services/ctrlWrapper');
const getAll = require('./getAll');
const getById = require('./getById');
const deletePersonnel = require('./delete');
const add = require('./add');
const update = require('./update');

module.exports = {
  getAllPersonnel: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  remove: ctrlWrapper(deletePersonnel),
  add: ctrlWrapper(add),
  update: ctrlWrapper(update),
};
