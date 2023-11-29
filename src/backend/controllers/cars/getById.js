const { getCarById } = require('../../model/general');

const getById = async (req, res) => {
  const { id } = req.params;
  const car = await getCarById(id);
  res.json(car);
};

module.exports = getById;
