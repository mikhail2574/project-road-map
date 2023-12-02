const validateBody = require('../../middlewares/validateBody');
const { getAll, addCar, addPersonnel } = require('../../controllers/excel');
const express = require('express');
const { schemaCar, schemaPerson } = require('../../schema/joiSchema');

const router = express.Router();

router.get('/', getAll);
router.post('/cars', validateBody(schemaCar), addCar);
router.post('/personnel', validateBody(schemaPerson), addPersonnel);

module.exports = {
  routerInfos: router,
};
