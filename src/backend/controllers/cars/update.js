const { updateCar } = require('../../model/general');

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedCar = await updateCar(id, body);
  res.json(updatedCar);
};

module.exports = update;
