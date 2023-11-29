const validateBody = require('../../middlewares/validateBody');
const {
  getAllPersonnel,
  getById,
  remove,
  add,
  update,
} = require('../../controllers/personnel');
const express = require('express');
const { schemaPerson, schemaPersonUpdate } = require('../../schema/joiSchema');

const router = express.Router();

router.get('/', getAllPersonnel);
router.get('/:id', getById);
router.post('/', validateBody(schemaPerson), add);
router.put('/:id', validateBody(schemaPersonUpdate), update);
router.delete('/:id', remove);

module.exports = {
  routerPersonnel: router,
};
