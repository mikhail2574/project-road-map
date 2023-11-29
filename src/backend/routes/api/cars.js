const validateBody = require('../../middlewares/validateBody');
const {
  getAllCars,
  getById,
  add,
  update,
  remove,
} = require('../../controllers/cars');
const route = require('express');
const { schemaCar, schemaCarUpdate } = require('../../schema/joiSchema');

const router = route.Router();

router.get('/', getAllCars);
router.get('/:id', getById);
router.post('/', validateBody(schemaCar), add);
router.put('/:id', validateBody(schemaCarUpdate), update);
router.delete('/:id', remove);

module.exports = {
  routerCars: router,
};
