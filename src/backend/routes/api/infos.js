const validateBody = require('../../middlewares/validateBody');
const {
  getAll,
  addCar,
  addPersonnel,
  updateCars,
  updatePersonnel,
} = require('../../controllers/excel');
const express = require('express');
const {
  schemaCar,
  schemaPerson,
  schemaCarUpdate,
  schemaPersonUpdate,
} = require('../../schema/joiSchema');

const router = express.Router();

router.get('/', getAll);
router.post('/cars', validateBody(schemaCar), addCar);
router.post('/personnel', validateBody(schemaPerson), addPersonnel);
router.put('/cars/:sign', validateBody(schemaCarUpdate), updateCars);
router.put(
  '/personnel/:name',
  validateBody(schemaPersonUpdate),
  updatePersonnel
);

module.exports = {
  routerInfos: router,
};
