const { deleteCar } = require('../../model/general');

const removeCar = async (req, res) => {
  const { id } = req.params;
  await deleteCar(id);
  res.status(204).json({});
};

module.exports = removeCar;
