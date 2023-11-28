const ctrlWrapper = require('../../services/ctrlWrapper');
const getAll = require('./getAll');
const getById = require('./getById');

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};
